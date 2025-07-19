import { z } from "genkit";
import { Client } from "pg";

// Define input schema for the database flow
const DbInputSchema = z.object({
  user: z.string(),
  host: z.string(),
  database: z.string(),
  password: z.string(),
  port: z.number(),
  query: z.string(),
});

import { generate } from "@genkit-ai/ai";
import { geminiPro } from "@genkit-ai/googleai";

// Define the PostgreSQL flow
export const postgresFlow = (ai: any) =>
  ai.defineFlow(
    {
      name: "postgresFlow",
      inputSchema: DbInputSchema,
      outputSchema: z.string(),
    },
    async (input: any) => {
      const client = new Client({
        user: input.user,
        host: input.host,
        database: input.database,
        password: input.password,
        port: input.port,
      });

      let dbResult;
      try {
        await client.connect();
        const res = await client.query(input.query);
        dbResult = res.rows;
      } finally {
        await client.end();
      }

      const llmResponse = await generate({
        model: geminiPro,
        prompt: `Summarize the following data: ${JSON.stringify(dbResult)}`,
      });

      return llmResponse.text();
    }
  );

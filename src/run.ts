import { postgresFlow } from "./index";
import {
  PG_USER,
  PG_HOST,
  PG_DATABASE,
  PG_PASSWORD,
  PG_PORT,
} from "./env";
import { configureGenkit } from "@genkit-ai/core";
import { firebase } from "@genkit-ai/firebase";

configureGenkit({
  plugins: [firebase()],
  logLevel: "debug",
  enableTracingAndMetrics: true,
});

const sampleQuery =
  "SELECT title, description, region from news_articles LIMIT 5;";

postgresFlow
  .run({
    user: PG_USER,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: PG_PORT,
    query: sampleQuery,
  })
  .then((result) => {
    console.log("Flow result:", result);
  })
  .catch((error) => {
    console.error("Flow error:", error);
  });

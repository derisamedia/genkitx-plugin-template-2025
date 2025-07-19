# Genkit PostgreSQL Plugin

This library provides a Genkit flow for interacting with a PostgreSQL database and enriching the data with an AI model.

## API

### `postgresFlow(ai)`

Creates a new flow.

-   `ai`: Your Genkit AI instance.

Returns a Genkit flow that you can use to interact with your plugin. The flow will query the database and then use the result to generate a summary using an AI model.

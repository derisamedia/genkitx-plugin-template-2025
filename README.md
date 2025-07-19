# Genkit Plugin

This library provides a Genkit flow

## How to run

1.  Install dependencies:
    ```
    npm install
    ```
2.  Create a `.env` file in the root of the project with the following content:
    ```
    PG_USER=your_user
    PG_HOST=your_host
    PG_DATABASE=your_database
    PG_PASSWORD=your_password
    PG_PORT=your_port
    ```
3.  Run the flow:
    ```
    npm start
    ```

## API

### `postgresFlow(ai)`

Creates a new flow.

-   `ai`: Your Genkit AI instance.

Returns a Genkit flow that you can use to interact with your plugin.

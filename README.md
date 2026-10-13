# SESH Music

[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)

SESH Music is a web app for searching YouTube for music, watching videos on the page, and viewing your search history. Its interface is inspired by TeamSESH/DeadBoy.

## Requirements

- Node.js 18 or later (the server uses the built-in `fetch` API)
- npm
- A [YouTube Data API v3](https://console.cloud.google.com/apis/library/youtube.googleapis.com) key

## Setup

1. Clone the repository and install the dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your API key:

   ```env
   YOUTUBE_API_KEY=your_api_key
   ```

   Enable the YouTube Data API v3 in the Google Cloud project associated with your key. The `.env` file is ignored by Git; do not share or commit your API key.

## Run the app

Start the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Express serves both the web app and the API on the same port.

To rebuild the frontend JavaScript and CSS as you develop, run this command in a separate terminal:

```bash
npm run wp
```

## Usage

1. Enter through the welcome screen.
2. Type a song name and click **SESH**.
3. The first result starts playing. Select another title from the list to switch videos.
4. Open **History** to view recorded searches.

## API

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/music?music=<query>` | Searches YouTube for up to five music videos. The query is required and can be up to 100 characters long. |
| `GET` | `/history` | Returns the locally stored search history. |

Search history is stored in `backend/data/history.json`.

## Project structure

```text
backend/   Express server, routes, YouTube integration, and search history
frontend/  User interface, components, styles, and public files
```

## Scripts

- `npm run dev` — starts the server with Nodemon.
- `npm run wp` — watches frontend files and rebuilds them with Webpack.

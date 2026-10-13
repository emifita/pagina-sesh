import fs from "node:fs/promises";
import getHistory from "./getHistory.service.js";

export default async function saveHistory(query) {
    const dataHistory = await getHistory()

    // Append the normalized query and rewrite the JSON file as formatted data.
    dataHistory.history.push(query);

    await fs.writeFile(
        dataHistory.filePath,
        JSON.stringify(dataHistory.history, null, 2)
    );
}

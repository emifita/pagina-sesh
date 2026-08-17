import fs from "node:fs/promises";
import getHistory from "./getHistory.service.js";

export default async function saveHistory(query) {
    const dataHistory = await getHistory()

    dataHistory.history.push(query);

    await fs.writeFile(
        dataHistory.filePath,
        JSON.stringify(dataHistory.history, null, 2)
    );
}
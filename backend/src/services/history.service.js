import fs from "node:fs/promises";
import path from "node:path";

export default async function saveHistory(query) {
    const filePath = path.resolve("./backend/data/history.json");

    const file = await fs.readFile(filePath, "utf-8");

    const history = JSON.parse(file);

    history.push(query);

    await fs.writeFile(
        filePath,
        JSON.stringify(history, null, 2)
    );
}
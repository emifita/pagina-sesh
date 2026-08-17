import path from "node:path"
import fs from "node:fs/promises"

export default async function getHistory(){
    const filePath = path.resolve("./backend/data/history.json");

    const file = await fs.readFile(filePath, "utf-8");

    const history = JSON.parse(file);

    return {history, filePath}
}
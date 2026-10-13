import getHistory from "../services/getHistory.service.js"
import fs from "node:fs/promises"

export default async function removeHistoryController(req, res) {
    // Convert and validate the route parameter before using it as an array position.
    const index = Number(req.params.index)

    if (!Number.isInteger(index) || index < 0) {
        return res.status(400).json({ error: "Índice inválido." })
    }

    try {
        const { history, filePath } = await getHistory()
        // A valid integer can still point outside the saved history.
        if (index >= history.length) {
            return res.status(404).json({ error: "Música não encontrada no histórico." })
        }

        // Persist the updated array so the deletion survives server restarts.
        history.splice(index, 1)
        await fs.writeFile(filePath, JSON.stringify(history, null, 2))
        return res.status(204).end()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

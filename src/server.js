import express from 'express'
import dotenv from 'dotenv'
import dataYT from './api/youtube-api.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = 3000

app.use(cors())

app.get('/', async (req, res) => {
    try {
        const data = await dataYT(req.query.music)

        res.json(data)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
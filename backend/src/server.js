import express from 'express'
import dotenv from 'dotenv'
import musicRoutes from "./routes/music.routes.js"
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = 3000

app.use(cors())
app.use("/", musicRoutes)


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
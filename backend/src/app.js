import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import musicRoutes from "./routes/music.routes.js"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicPath = path.resolve(__dirname, "../../frontend/public")

app.use(cors())
app.use(express.static(publicPath))
app.use("/", musicRoutes)

export default app
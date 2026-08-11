import express from 'express'
import cors from 'cors'
import musicRoutes from "./routes/music.routes.js"

const app = express()

app.use(cors())
app.use("/", musicRoutes)

export default app
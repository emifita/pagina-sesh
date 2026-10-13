import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()

// Keep the server on the port used by the frontend API requests.
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

import express from 'express'
import connectDB from './database/connectdb.js'
import web from './routes/web.js'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';

dotenv.config()

const port = process.env.PORT
// const DATABASE_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/'
const DATABASE_URL = process.env.DB_URL 
connectDB(DATABASE_URL)

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api',web)

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

app.listen(port,()=>{
    console.log(`Server is listen at http://localhost:${port}`)
})

//TLoPwYC6xtCJxJ1Wszu7aCWEtjhxHpdogA

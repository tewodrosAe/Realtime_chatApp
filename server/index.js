import express from 'express'
import cors from 'cors'
import axios from 'axios'
import userRouter from './routes/userRouter.js'

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.use("/authenticate", userRouter)

app.listen(5000,() => console.log("success"))

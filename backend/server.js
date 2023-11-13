import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js' 

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// route for user auth api
app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

app.use(notFound)
app.use(errorHandler)


app.listen(port, () => console.log(`Server running on port ${port}`))
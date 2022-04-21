const express = require('express')
const app = express()
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundError = require('./middleware/not-found')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')
require('dotenv').config()
const PORT = process.env.port || 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('STORE API')
})

app.use('/api/v1/products',productRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundError)


app.listen(PORT, async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log(`server listening at port ${PORT}....`)
    } catch (error) {
        console.log(error)
    }
})
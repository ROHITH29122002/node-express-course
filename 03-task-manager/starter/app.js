const connectDB = require('./db/connect')
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT ||  3000


const tasks = require('./routes/tasks')

app.use(express.static('./public'))

app.use(express.json())

app.use('/api/v1/tasks',tasks)


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening at port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()

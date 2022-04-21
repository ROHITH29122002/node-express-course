
require('dotenv').config()
const { connect } = require('mongoose')
const connectDB = require('./db/connect')
const Product = require('./models/product')


const ProductsJson = require('./products.json')

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.create(ProductsJson)
        console.log('success...');
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
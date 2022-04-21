const Product = require('../models/product')

const getAllProducts = async (req,res)=>{
    const {featured , company ,name , sort ,fields} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = { $regex : company , $options : 'i'}
    }
    if(name){
        queryObject.name = { $regex : name , $options : 'i'}
    }
    let result = Product.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        result.sort(sortList)
    }
    if(fields){
        const fieldList = fields.split(',').join(' ')
        result.select(fieldList)
    }
    const products = await result
    if(products.length === 0 ) {
        return res.status(200).json({msg : 'no products found'})
    }
    res.status(200).json({products})
}

module.exports = {
    getAllProducts
}
const mongoose = require('mongoose')

function connectDB(url){
    return mongoose.connect(url,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true
    }).then(console.log('SUCCESFULLY CONNECTED TO DATABASE...')).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB

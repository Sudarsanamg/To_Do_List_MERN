const mongoose =require('mongoose')

const schema=new mongoose.Schema(
    {
        task:String
    }
)

const todomodel=mongoose.model('todos',schema)
module.exports=todomodel
const mongoose =require('mongoose')

const schema=new mongoose.Schema(
    {
       
        task:String,
        done:{
            type:Boolean,
            default:false
        }   
    }
)

const todomodel=mongoose.model('todos',schema)
module.exports=todomodel
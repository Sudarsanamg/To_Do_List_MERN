const express =require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const todomodel =require('./Models/Todo')

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')


app.post('/add',(req,res)=>
{
    const task =req.body.task ;
    todomodel.create(
        {
            task:task
        }
    )
})


app.get('/data',async(req,res)=>
{
    try{
        const data= await todomodel.find();
        res.json(data)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({message:"Server Error"})
    }
})



app.listen(3001,()=>
{
    console.log('Server is running....')
})
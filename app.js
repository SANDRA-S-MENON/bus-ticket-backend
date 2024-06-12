const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const buss = require("./models/bus")
const { busmodel } = require("./models/bus")

const app=express()
app.use(cors())
app.use(express.json())



app.post("/add",(req,res)=>{
    let input = req.body
    let bus = new busmodel(input)
    bus.save()
    res.json({"status":"success"})
})
app.get("/view",(req,res)=>{
    busmodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
    res.send("viewed")
})

app.post("/search",(req,res)=>{
    let input = req.body
    busmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})
app.post("/delete",(req,res)=>{
    let input= req.body
    busmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"failed"})
        }
    )

})


app.listen(8080,()=>{
    console.log("server started")
})




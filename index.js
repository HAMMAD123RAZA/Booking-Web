import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app=express()
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"


app.use(cors())
app.use(express.json())


const connect=async()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/login",{
            dbName:"booking"
        })
        console.log("db connected")
        
    } catch (error) {
        console.log("error in db" + error)
    }
}

app.get("/",(req,res)=>{
    res.json("hello")
})


app.use('/api/auth',authRoute)
app.use('/api/user', userRoute)
app.use('/api/room', roomRoute)
app.use('/api/hotels', hotelRoute)


app.listen(8000,()=>{
    console.log("backend connected")
    connect()
})

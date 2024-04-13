import express from "express";
const router=express.Router();

router.get('/',(req,res)=>{
    res.json("hey this is room")
})

export default router
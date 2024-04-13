import express from "express";
const router=express.Router();

router.get('/',(req,res)=>{
    res.json("hey this is users")
})

export default router
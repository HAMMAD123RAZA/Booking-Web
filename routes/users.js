import express from "express";
const router=express.Router();
import User from "../models/User.js";
import {verifyAdmin,verifyToken, verifyUser } from "../utils/VerifyToken.js"

import {updateUser, deleteUser, getAll, getUser } from "../controllers/user.js";

// router.get("/checkauth",verifyToken,(req,res,next)=>{
// res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in n u can delete ussers")
//     })
        
//     router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//         res.send("hello user, you are logged in n u can delete ussers")
//         })
            
    
router.put("/:id",verifyUser,updateUser)

router.delete("/:id",verifyUser,deleteUser)

router.get("/:id",verifyUser,getAll)

router.get("/",verifyAdmin,getUser)


export default router
import { createError } from "./Error.js";
import jwt from "jsonwebtoken";

 const  verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    // if there is no token
    if(!token){
        return next(createError(404,"not authenticated"));
    }
    // verifying token
    jwt.verify(token,"secretKey",(err,user)=>{
        if(err) return next(createError(404, "invalid"));
        req.user=user;
        next();
    })
}

const verifyUser=(req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(404, "not authorized"));
        }
    })
}

const verifyAdmin=(req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(404, "not authorized"));
        }
    })
}



export  {verifyToken,verifyUser,verifyAdmin};
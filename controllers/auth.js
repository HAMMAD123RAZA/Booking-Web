import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { createError } from '../utils/Error.js';
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash // Save the hashed password instead of the plain text one
        });

        await newUser.save();
        res.status(201).json("user created");
    } catch (error) {
        console.log(error);
        next(error);
    }
}


export const login=async(req,res,next)=>{
    try {
        const  user=await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,'not found'))
        // checking password
        const compare=await bcrypt.compare(req.body.password,user.password)
        if(!compare) return next(createError(400, 'wrong password or username'))

        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},"secretKey");

        //we are hiding isAdmin & password

        const {password,isAdmin,...otherDetails}=user._doc
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(201).json({...otherDetails})
    } catch (error) {
        console.log(error);
        next(error);   
    }
    }
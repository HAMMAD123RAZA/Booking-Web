import User from "../models/User.js";


export const updateUser=async(req,res)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted User');
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getAll=async(req,res)=>{
    try {
        const getUser=await User.findById(req.params.id);
        res.status(200).json(getUser);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getUser=async(req,res)=>{
    try {
        const Users=await User.find();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
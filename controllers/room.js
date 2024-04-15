import express from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room";

export const createRoom=async(req,res,next)=>{

const hotelId=req.params.hotelId;
const newRoom=new Room(req.body);

try {
    const savedRoom=await newRoom.save()
    try {
        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
    } catch (error) {
        next(error)
    }
    res.status(200).json(savedRoom)
    
} catch (error) {
}

}


export const updateRoom=async(req,res)=>{
    try {
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteRoom=async(req,res)=>{
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted Room');
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getAll=async(req,res)=>{
    try {
        const getRoom=await Room.findById(req.params.id);
        res.status(200).json(getRoom);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getRoom=async(req,res)=>{
    try {
        const Rooms=await Room.find();
        res.status(200).json(Rooms);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


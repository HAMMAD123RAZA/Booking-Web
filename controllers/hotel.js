import Hotel from "../models/Hotel.js";

export const createHotel=async(req,res)=>{
    const newHotel=new Hotel(req.body);
    try {
        const savedHotel=await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateHotel=async(req,res)=>{
    try {
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteHotel=async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted Hotel');
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getAll=async(req,res)=>{
    try {
        const getHotel=await Hotel.findById(req.params.id);
        res.status(200).json(getHotel);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getHotel=async(req,res)=>{
    try {
        const hotels=await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAll, getHotel, updateHotel } from "../controllers/hotel.js";
const router=express.Router();

router.post("/",createHotel)

router.put("/:id",updateHotel)

router.delete("/:id",deleteHotel)

router.get("/:id",getAll)

router.get("/",getHotel)



export default router
import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getAll, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/VerifyToken.js";
const router=express.Router();

router.post("/",verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)

router.delete("/:id",verifyAdmin,deleteHotel)

router.get("/:id",getAll)

router.get("/",getHotel)



export default router
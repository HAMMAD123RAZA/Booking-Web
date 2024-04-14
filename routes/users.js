import express from "express";
const router=express.Router();
import User from "../models/User.js";
import { createUser, updateUser, deleteUser, getAll, getUser } from "../controllers/user.js";

router.post("/",createUser)

router.put("/:id",updateUser)

router.delete("/:id",deleteUser)

router.get("/:id",getAll)

router.get("/",getUser)


export default router
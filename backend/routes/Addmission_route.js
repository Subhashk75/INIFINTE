import express from "express";
import { insertUser } from "../controllers/admissionPage_controller.js";
const router= express.Router();

router.post("/addmission" ,insertUser);

export default router;
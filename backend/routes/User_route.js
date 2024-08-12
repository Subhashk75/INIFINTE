import { LoginUser, SignUpUser } from "../controllers/User_controller.js"; //import from Usercontroller.js 
import express from "express";
const router = express.Router();

router.post("/login",LoginUser);  //define for login
router.post("/signup",SignUpUser); // define for signup 

export default router;

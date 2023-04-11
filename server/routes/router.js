import express from "express";
import userpost from "./../controllers/usersControllers.js";
import upload from "./../multerConfig/storageConfig.js";
const router = new express.Router();


router.post("/user/register",upload.single("user_profile"), userpost);





export default router;
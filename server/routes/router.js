import express from "express";
const router = new express.Router();
import {userpost} from "./../controllers/usersControllers.js";
import {upload} from "./../multerConfig/storageConfig.js";



router.post("/user/register",upload.single("user_profile"), userpost);





export { router };
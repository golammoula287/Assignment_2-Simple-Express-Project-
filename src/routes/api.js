const express=require('express');
const StudentController = require("../controller/StudentController");
const AuthMiddleware = require("../middleware/Authmiddleware");
const router=express.Router();

// Specific Middleware

router.get("/home",StudentController.ReadHome);




router.put("/create",StudentController.CreateFile);




router.get("/about",StudentController.ReadAbout);




router.get("/contact",StudentController.ReadContact);



router.post("/uploadFile",StudentController.UploadFile);











module.exports=router;
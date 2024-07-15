const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');
const auth=require('../middleware/middleware');
const session = require("express-session");
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET) {
    console.error("SESSION_SECRET is not defined in .env file");
    process.exit(1); // Exit the process if SESSION_SECRET is not set
}

router.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use secure: true if using HTTPS
}));

router.post("/signup", controller.signup); 
router.post("/login",controller.login);
router.get("/logout", controller.logout);
module.exports=router;
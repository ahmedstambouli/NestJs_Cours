const express =require("express");
const bcrypt=require('bcrypt');
const User =require('../models/user')
const jwt=require('jsonwebtoken');
const router=express.Router();

router.post("/login",(req,res)=>{
    // console.log(req);
    res.send(req.body)
})




router.get('/register',(req,res)=>{
    res.send('<h1> Welcom to page register! </h1>');
});




module.exports=router;  //export the module for use in other files  
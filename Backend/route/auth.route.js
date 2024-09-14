import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const router = express.Router();

export const RegisterRoute = router.post("/register", async (req,res,next)=>{
    const {name, email ,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = User({name, email, password:hashedPassword});
    try{
        await newUser.save()
        res.status(200).json({success:true,message : "user created sucessfully!"});
    }catch(error){
        next(error);
    }
})

export const LoginRoute = router.post("/login",async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if (!validUser) return (res.status(404).json({message:"User Not Found"}));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return (res.status(401).json({message:"Invalid Password"}));
        const token = jwt.sign({id:validUser._id},"l63ybs80wnbfhs$5hwia563rsv%3vaj");
        const { password:hashedPassword , ...rest } = validUser._doc;
        const expiry = new Date(Date.now()+(60**3));
        res.cookie("AccessToken",token,{httpOnly:true, expires:expiry}).status(200).json({success:true,...rest});
    }catch(err){
        next(err);
    }
})

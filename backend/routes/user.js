const router=require("express").Router();
const User=require("../models/user");
const bcrypt =require("bcryptjs");
const jwt= require("jsonwebtoken");
const {authenticateToken}=require("./userAuth");

//user apis

//signup
router.post("/sign-up",async(req,res)=>{
    try{
        const {username,email,password,address}=req.body;
        //check username length > 4
        if(username.length<4){
            return res.status(400).json({message: "username should be greater than 3"});
        }
        //check username already exist
        const existingUsername= await User.find({username: username});
        if(existingUsername.length){
            return res.status(400).json({message: "username already exists"});
        }
        //check email already exist
        const existingEmail= await User.find({email: email});
        if(existingEmail.length){
            return res.status(400).json({message: "email already exists"});
        }
        //check password length
        if(password.length<=5){
            return res.status(400).json({message: "password length should be greater than equal to 5"});
        }

        const hashPass= await bcrypt.hash(password,10);

        const newUser =new User({
            username: username,
            email: email,
            password: hashPass,
            address:address
        });
        await newUser.save();
        return res.status(200).json({message:"signup successful"});
    }
    catch(error){
        res.status(500).json({message: "internal server error"});
    }
});

//sign in
router.post("/sign-in",async(req,res)=>{
    try{
        const{username, password}=req.body;

        const existingUser= await User.findOne({username});
        if(!existingUser){
            res.status(400).json({message: "Invalid Credentials"});
        }

        await bcrypt.compare(password,existingUser.password, (err,data)=>{
            if(data){
                const authClaims=[
                    {name:existingUser.username},
                    {role:existingUser.role}
                ]
                const token=jwt.sign({authClaims},"bookStore123",{expiresIn:"30d"});
                res.status(200).json({id: existingUser._id, role: existingUser.role,token: token});
            }
            else{
                res.status(400).json({message : "invalid credentials"});
            }
        })
    }
    catch(error){
        res.status(500).json({message: "internal server error"});
    }
});


module.exports=router;
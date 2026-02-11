const express = require("express")
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const authRouter = express.Router();


authRouter.post("/register", async (req,res)=>{
    const {username, email, password, bio, profile_image} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"user not exists" + (isUserAlreadyExists.email === email ? "Email already exists" : "username already exists")
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest('hex')

    const user = await userModel.create({
        username, 
        email,
        password : hash,
        bio,
        profile_image
    })

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token", token)

    res.status(201).json({
        message : "user registered successfully",
        user:{
            email:user.email,
            username: user.username,
            bio: user.bio,
            profile_image: user.profile_image
        }
    })
})


module.exports = authRouter
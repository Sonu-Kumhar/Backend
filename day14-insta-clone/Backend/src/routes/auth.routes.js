const express = require("express")
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const authRouter = express.Router();

/**
 * POST /api/auth/register
 */

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

/**
 * POST  /api/auth/login
 */

authRouter.post("/login", async (req, res)=>{
    const {username, email, password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"user not exists"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex");

    const isPasswordValid = hash === user.password;

    if(!isPasswordValid){
        return res.status(401).json({
            message:"password is incorrect"
        })
    }

    const token = jwt.sign(
        {
            id : user._id
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token", token);

    res.status(200).json({
        message:"user loggedIn successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profile_image:user.profile_image
        }
    })
})

module.exports = authRouter
import {User} from '../Models/User.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const LoginUser = async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({
            "success": false,
            "message" : "Enter all the Credentials"
        })
    }

    const user = await User.findOne({email}).select("+password")
    console.log(user);
    if(!user){
        return res.status(400).json({
            "success": false,
            "message" : "User Not Found"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect){
        return res.status(400).json({
            "success": false,
            "message" : "Password Is Incorrect"
        })
    }
  

    const userId = user._id;
    const token = jwt.sign({id: userId},
        process.env.JWT_SECRET_KEY,
        {
        expiresIn: 60*15,
    })

    return res.status(200).cookie("token",token,{maxAge: 15*60*1000, httpOnly: true}).json({
        "success": true,
        "message": "User Logged In",
        "user" : user
    })

}

export const RegisterUser = async(req, res, next)=>{
    const {name, password, email} = req.body
    if(!name || !password || !email){
        return res.status(404).json({
            "success": false,
            "message" : "Enter all credentials"
        })
    }

    let user = await User.findOne({email})

    if(user){
        return res.status(404).json({
            "success" : false,
            "message" : "Email Already Registered"
        })
    }

    const hashedPassword =await bcrypt.hash(password, 10)

    user = await User.create({name, email, password: hashedPassword})

    const userId = user._id;
    const token = jwt.sign({id: userId},
        process.env.JWT_SECRET_KEY,
        {
        expiresIn: 60*15,
    })

    return res.status(200).cookie("token",token,{maxAge: 15*60*1000}).json({
        "success": true,
        "message": "User Created",
        "user" : user
    })
    

}

export const LogoutUser = async(req, res)=>{
    res.status(200).cookie("token","",{
        maxAge: new Date(Date.now()),
    }).json({
        "success": true,
        "message": "User Logged Out"
    })
}

export const GetMyProfile = (req, res)=>{
    res.status(200).json({
        success: true,
        user : req.user
    })
}
import {User} from '../Models/User.models.js'
import jwt from 'jsonwebtoken'

export const verifyJWT = async(req, res, next)=>{

    const {token} = req.cookies

    if(!token){
        return res.status(400).json({
            success:false,
            message: "Login First"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = await User.findById(decoded.id);
        next()
    }catch(e){
        console.log("Error Occurred in auth: ", e);
    }

}
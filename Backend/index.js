import  express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import userRouter from './Routes/userRouter.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const app = express()



dotenv.config({
    path: './config.env'
})

    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName: "UserAuthentication",
            
        })
        console.log("database connected")
    }catch(e){
        console.log("error occured in database connn:", e)
    }
    


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/users", userRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server Connected at PORT:  ${process.env.PORT}`);
})
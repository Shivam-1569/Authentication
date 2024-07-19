import express from 'express'
import {GetMyProfile, LoginUser, LogoutUser, RegisterUser} from '../Controllers/User.js'
import { verifyJWT } from '../Middlewares/auth.middlewares.js'

const Router = express.Router()

Router.post('/login', LoginUser)
Router.post('/register', RegisterUser)

Router.get('/logout',verifyJWT ,LogoutUser)
Router.get('/profile',verifyJWT ,GetMyProfile)
export default Router
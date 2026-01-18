import express from 'express'
import {getPublicCreations, getUserCreations, toggleLikeCreations} from '../controlers/usercontroler.js'
import auth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.get('/get-user-creations', auth , getUserCreations)
userRouter.get('/get-published-creations', auth , getPublicCreations)
userRouter.post('/toggle-like-creations', auth , toggleLikeCreations)

export default userRouter
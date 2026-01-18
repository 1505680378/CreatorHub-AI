import express from "express";
import auth from '../middlewares/auth.js';
import { generateBlogTitle, generateImage, removeBackground, removeObject } from '../controlers/aicontroler.js';
import { upload } from "../Configs/multer.js";

const aiRouter = express.Router();

aiRouter.post('/generate-blog-title', auth, generateBlogTitle);
aiRouter.post('/generate-image', auth, generateImage);
aiRouter.post('/remove-image-background', auth, upload.single('image'), removeBackground);
aiRouter.post('/remove-image-object',upload.single('image'), auth, removeObject);


export default aiRouter;

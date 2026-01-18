import fs from 'fs'
import { OpenAI } from "openai";
import sql from "../Configs/db.js";
import { clerkClient, getAuth } from "@clerk/express";
import axios from "axios";
import { v2 as cloudinary } from 'cloudinary';
import FormData from "form-data";

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateBlogTitle = async (req, res) => {
    try {
        const { prompt } = req.body;
        const { userId } = getAuth(req);

        const response = await AI.chat.completions.create({
            model: "gemini-3-flash-preview",
            messages: [
                {
                    role: "system",
                    content: "You generate only blog titles. No explanations. No introductions."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });


        const content = response.choices?.[0]?.message?.content;

        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId}, ${prompt}, ${content}, 'blog-title')`;

        res.json({ success: true, content });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export const generateImage = async (req, res) => {
    try {
        const { userId } = getAuth(req);
        const { prompt, publish } = req.body;

        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API_KEY },
            responseType: 'arraybuffer',
        });

        const buffer = Buffer.from(data);
        const base64Image = `data:image/png;base64,${buffer.toString('base64')}`;

        const { secure_url } = await cloudinary.uploader.upload(base64Image);

        await sql`INSERT INTO creations (user_id, prompt, content, type, publish)
        VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${publish ?? false})`;

        res.json({ success: true, content: secure_url });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export const removeBackground = async (req, res) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No image file uploaded",
            });
        }
        const imagePath = req.file.path;

        const result = await cloudinary.uploader.upload(imagePath, {
            effect: "background_removal",
        });

        fs.unlinkSync(imagePath)

        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId},'Remove background from image' , ${result.secure_url}, 'image')`;

        res.json({ success: true, content: result.secure_url });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}


export const removeObject = async (req, res) => {
    try {
        const userId = getAuth(req);
        const { object } = req.body;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No image uploaded",
            });
        }

        if (!object || object.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Object name is required",
            });
        }
        const imagePath = req.file.path;

        const uploadResult = await cloudinary.uploader.upload(imagePath);

        fs.unlinkSync(imagePath);

        const image_url = cloudinary.url(uploadResult.public_id, {
            transformation: [
                { effect: `gen_remove:${object}` }
            ],
            resource_type: "image",
        });

        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId},${`Removed ${object} from image`} , ${image_url}, 'image')`;

        res.json({ success: true, content: image_url });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

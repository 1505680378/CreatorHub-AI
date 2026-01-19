import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express';
import aiRouter from './routes/aiRoute.js';
import connectCloudinary from './Configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

await connectCloudinary();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: [
        process.env.FRONTEND_URL, // deployed frontend
        'http://localhost:5173'   // local dev
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => {
    res.send("Server is live.");
});

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

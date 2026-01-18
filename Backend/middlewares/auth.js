
// Middleware to attach user info

import { clerkClient, getAuth } from "@clerk/express";

const auth = async (req, res, next) => {
    try {
        const { userId } = getAuth(req); // just get userId
        req.userId = userId; // attach userId to request
        next();
    } catch(error) {
        res.json({ success: false, message: error.message });
    }
}

export default auth;

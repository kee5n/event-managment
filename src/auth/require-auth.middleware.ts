import type { RequestHandler } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "./auth.js";
import type { AuthUser } from "./express.js";

export const requireAuth: RequestHandler = async (req, res, next) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
        res.status(401).json({ error: "Pole sisse logitud" });
        return;
    }

    req.user = session.user;
    next();
};

export const requireRole =
    (...roles: NonNullable<AuthUser["role"]>[]): RequestHandler =>
    (req, res, next) => {
        const role = req.user?.role;

        if (role === "admin" || (role && role.includes(role))) {
            next();
            return;
        }

        res.status(403).json({ error: "Puudub õigus" });
    };

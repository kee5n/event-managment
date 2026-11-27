import { Router } from "express";
import { requireAuth, requireRole } from "./require-auth.middleware.js";
import { toMeResponse } from "./dto/me-response.dto.js";

export const meRouter = Router();

meRouter.get("/me", requireAuth, (req, res) => {
    res.json(toMeResponse(req.user!));
});

meRouter.get("/organizer-only", requireAuth, requireRole("organizer"), (req, res) => {
    res.json({ok: true});
});
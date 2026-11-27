import type { ErrorRequestHandler } from "express";
import z from "zod";
import { HttpError } from "../error/http.error.js";
import { StatusCode } from "./status-codes.js";

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    if (err instanceof z.ZodError) {
        res.status(StatusCode.BAD_REQUEST).json({
            error: "Vigane päring",
            details: z.flattenError(err).fieldErrors,
        });
        return;
    }

    if (err instanceof SyntaxError && "body" in err) {
        res.status(StatusCode.BAD_REQUEST).json({ error: "Vigane JSON" });
        return;
    }

    if (err instanceof HttpError) {
        res.status(err.statusCode).json({ error: err.message });
        return;
    }

    console.error(err);
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        error: "Serveri viga",
    });
};

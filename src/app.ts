import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth/auth.js";
import { meRouter } from "./auth/me.routes.js";
import { errorHandler } from "./shared/http/error.middleware.js";

const app = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("/api", meRouter);

app.use(express.static("public"));

app.use(errorHandler);

export default app;

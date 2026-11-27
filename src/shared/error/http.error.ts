import { StatusCode } from "../http/status-codes.js";

export abstract class HttpError extends Error {
    public readonly statusCode: StatusCode;

    protected constructor(message: string, statusCode: StatusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = new.target.name;
    }
}

export class BadRequestError extends HttpError {
    constructor(message = "Vigane päring") {
        super(message, StatusCode.BAD_REQUEST);
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message = "Pole sisse logitud") {
        super(message, StatusCode.UNAUTHORIZED);
    }
}

export class ForbiddenError extends HttpError {
    constructor(message = "Puudub õigus") {
        super(message, StatusCode.FORBIDDEN);
    }
}

export class NotFoundError extends HttpError {
    constructor(message = "Otsitud ressursi ei leitud") {
        super(message, StatusCode.NOT_FOUND);
    }
}

export class ConflictError extends HttpError {
    constructor(message = "Konflikt andmete praeguse olekuga") {
        super(message, StatusCode.CONFLICT);
    }
}

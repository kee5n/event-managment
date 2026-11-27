import type { AuthUser } from "../express.js";
import type { Role } from "../roles.js";

export type MeResponseDto = {
    id: string;
    name: string;
    email: string;
    image: string | null;
    role: Role | null;
};

export function toMeResponse(user: AuthUser): MeResponseDto {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image ?? null,
        role: user.role ?? null,
    };
}

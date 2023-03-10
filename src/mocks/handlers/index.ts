import { userHandler } from "@/mocks/handlers/userHandler";
import { authHandler } from "@/mocks/handlers/authHandler";
import { workspaceHandler } from "@/mocks/handlers/workspaceHandler";
import { boardHandler } from "@/mocks/handlers/boardHandler";
import { listHandler } from "@/mocks/handlers/listHandler";

export const handlers = [
    ...userHandler,
    ...authHandler,
    ...workspaceHandler,
    ...boardHandler,
    ...listHandler,
];

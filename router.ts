import { Router } from "./deps.ts";
import { rootHandler, todoHandler } from "./middlewares/mod.ts";

export const router = new Router();

// 第一引数にはrouterのcontextが入る
router.get("/", rootHandler.getHome);

router.get("/todos", todoHandler.getAll);

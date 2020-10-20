import { Router } from "https://deno.land/x/oak@v6.3.1/router.ts";
import { RouterContext, Status } from "../deps.ts";

export function getHome(ctx: RouterContext) {
  ctx.response.status = Status.OK;
  ctx.response.body = "Todo list with API 🦕";
}

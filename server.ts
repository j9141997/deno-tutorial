import { Application, Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Start listening on ${hostname ?? "localhost"}:${port}`);
});

app.listen({ port: 8000 });

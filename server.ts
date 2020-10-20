import { Application, bold, yellow } from "./deps.ts";
import { router } from "./router.ts";
import { errorHandler, logger } from "./middlewares/mod.ts";

const app = new Application();

app.use(logger);
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    bold(`Start listening on `) + yellow(`${hostname ?? "localhost"}:${port}`),
  );
});

app.listen({ port: 8000 });

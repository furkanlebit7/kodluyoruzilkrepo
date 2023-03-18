<details>
    ### ODEV 6
    ## Koa.js ile web sunucumuzu yazalım.
  <summary>Click me</summary>
  
  ### Heading
  1. Foo
  2. Bar
     * Baz
     * Qux

### Code

````js
  const koa = require("koa");
  const Router = require("koa-router");

  const app = new koa();
  const router = new Router();
  router.get("/", (ctx, next) => {
  ctx.body = "<h1>Welcome to Main Page</h1>";
  });
  router.get("/about", (ctx, next) => {
    ctx.body = "<h1>Welcome to About Page</h1>";
  });
  router.get("/contact", (ctx, next) => {
    ctx.body = "<h1>Welcome to Contact Page</h1>";
  });

  app.use(router.routes());

  const port = 3000;

  app.listen(port, function () {
    console.log("Server running on https://localhost:3000");
  });
  ```
</details>
````

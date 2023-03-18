

### Ödev 3 - Daire Modülü
<details>  
  <summary>Details</summary>

### circle.js

````js
const pi = 3.14159265359;

let circleArea = (r) => {
  let circleArea = pi * Math.pow(r, 2);
  console.log("Circle Area: ", circleArea);
};

let circleCircumference = (r) => {
  let circleCircumference = 2 * pi * r;
  console.log("Circle Circumference: ", circleCircumference);
};

module.exports = { circleArea, circleCircumference };
````
### index.js

````js
const { circleArea, circleCircumference } = require("./circle");

circleArea(5);
circleCircumference(5);
````
</details>

* * *

### Ödev 4 - FS Modülü Çalışması
<details>  
  <summary>Details</summary>

### Code

````js
const fs = require('fs');

//create
fs.writeFile('employees.json','[{"name": "Employee 1", "salary": 4000},','utf8',(err)=>{
    if(err) console.log(err);
    else console.log('file created.')
});

//read
fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})

//update
fs.appendFile('employees.json','{"name": "Employee 2", "salary": 6000}]','utf8',(err)=>{
    if(err) console.log(err);
    else console.log('file updated.');
});

//remove
fs.unlink('employees.json',(err)=>{
    if (err) console.log(err);
    else console.log('file removed');
})
````
</details>

* * *


### Ödev 5 - Kendi Web Sunucumuz
<details>  
  <summary>Details</summary>

### Code

````js
const http = require("http");
const server = http.createServer((req, res) => {
const url = req.url;

if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>INDEX SAYFASI</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ABOUT SAYFASI</h1>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>CONTACT SAYFASI</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }
  res.end();
});
const port = 5000;

server.listen(5000, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
````
</details>

* * *

### Ödev 6 - Koa.js ile Web Sunucusu Yazımı
<details>  
  <summary>Details</summary>

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
````
</details>

* * *

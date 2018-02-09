let user = require('./User.js');
console.log(`userName::${user.userName}`);
console.log(`sayHello::${user.sayHello()}`);

let http = require('http');
//价值请求头
let url = require('url');
let util = require('util');

let server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader = ("Content-Type","text/plain;charset=utf-8");
  urlRes = url.parse(req.url);
  utilObjStr = util.inspect(urlRes);
  res.end(utilObjStr);
});

server.listen(3000,'127.0.0.1', ()=>{
  console.log("服务器已经运行，请打开浏览器，输入http://127.0.0.1：3000/来访问")
})

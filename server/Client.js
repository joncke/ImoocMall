//nodejs调用第三方库
let http = require('http');
let util = require('util');

http.get("http://www.imooc.com/u/card",function (res) {
  let data = '';
  res.on("data",function (chunk) {
    data += chunk;
  });
  
  res.on("end",function () {
    let reasult = JSON.parse(data);
    // console.log('ressult:::::'+util.inspect(reasult));
    console.log('result::::'+result.msg);
  });
  
})

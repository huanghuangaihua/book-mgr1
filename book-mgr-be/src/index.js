const Koa = require('koa');


// 创建koa实例对象--
const app = new Koa();

// 开启一个http服务
// 接受 http 请求并作处理，处理完后响应
// https  443   http->80a
app.listen(3000,()=>{
    console.log('启动成功');
})
console.log(121212);
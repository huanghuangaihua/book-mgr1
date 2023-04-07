// async-await

const request = (arg,isReject) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isReject){
                reject('出错啦！')
                return;
            }
            console.log(arg);
            // 调用resolve是成功
            resolve(arg+1);
        },1000)
    });
};

// async返回一个promise函数 异步
const fn = async ()=>{
    // 等待一个成功的请求，请求成功的话就将值赋值给res
    const res1 = await request(1);
    const res2 = await request(res1);
    const res3 = await request(res2);
    const res4 = await request(res3);
    const res5 = await request(res4);
    console.log(res5);
};
// const fn1 = () =>{
//     return new Promise((resolve,reject) =>{
//         resolve(1);
//     })
// }
fn();
// const fn1= async function(){}

// Promise
// 回调函数

// 一个接口 要拿到数据  跑5个前置接口
// const request = (arg,cb)=>{
//     setTimeout(()=>{
//         console.log(arg);''
//         cb(arg+1);
//     },300)
// };

// request(1,function(res){
//     request(res,function(res1){
//         request(res1,function(res2){
//             request(res2,function(res3){
//                 request(res3,function(res4){
//                     console.log("res4",res4);
//                 })
//             })
//         })
//     })
// });

// const request = (arg,isReject) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(isReject){
//                 reject('出错啦！')
//                 return;
//             }
//             console.log(arg);
//             // 调用resolve是成功
//             resolve(arg+1);
//         },1000)
//     });
// };

// // return 一个promise的实例，然后调用.then方法表示成功时做的事情
// request(1)
// // 成功
//     .then((res1)=>{
//         return request(res1,true);
//     })
//     // 失败
//     // .catch((msg)=>{
//     //     console.log(msg);
//     // })
//     .then((res2)=>{
//         return request(res2)
//         // catch的语法糖
//     },(e)=>{
//         console.log(e);
//     })
//     .then((res3)=>{
//         return request(res3)
//     })
//     .then((res4)=>{
//         return request(res4)
//     })
//     .then((res5)=>{
//         console.log("res5:",res5);
//     })
// 1.引入mongoose依赖包
const mongoose = require('mongoose');
// 默认部署在本地的地址mongodb://127.0.0.1:27017

// !!!如何创建数据库-表-字段-属性
// 给哪个数据库的
// 哪个集合
// 添加什么格式的文档

// 5. schema 文档 映射到一个集合，类似于创建一个容器
// 这个是表里面的字段
const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});
// 6. Model 是给集合添加数据，给集合修改数据，对容器的内容（变量）进行增删改查，
// 可以理解成是根据Schema生成的一套方法集合，这套方法用来操作集合和集合下的文档
// 可以把user看做是一张表
const UserModel = mongoose.model('User',UserSchema)

// 2. 
const connect = () =>{
    // 3. 去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr1');
    // 4. 当数据库被打开的时候 做一些事情
    mongoose.connection.on('open',()=>{
        console.log('连接成功');

        // 7. 创建一个实例用户
        const user = new UserModel({
            nickname:'小华',
            password:'123456',
            age:12,
        });
        // 8. 修改字段属性
        user.age = 99;
        // 9. 将实例对象保存
        user.save();
    })
};
// 10.
connect();
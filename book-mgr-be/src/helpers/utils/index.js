// 时间戳
const getYearByTimeStamp = (ts) =>{
    const date = new Date(ts);
    
    return date.getFullYear();
};
const getDateByTimeStamp = (ts) =>{
    const date = new Date(ts);
    
    return date.getDate();
};
// 导出,导出之后其他文件如果要使用的话，就可以用，不然只能看，不能用

module.exports = getYearByTimeStamp;

// 导出多个参数
module.exports={
    // getDateByTimeStamp:getDateByTimeStamp,--->es5写法
    getDateByTimeStamp,
    getYearByTimeStamp,
    
}
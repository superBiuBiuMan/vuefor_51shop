import CryptoJS from "crypto-js";

const secretKey = "3RrjdaV8KHzLSsFMJOYhxlTCDetqZ7pkXunf64bmI5voBWUQiyw2EN9Gc1PA0g8a6LFP4dpeD9u48iFaWDYptGOD7QOF2oyO2UQT3YyuzrP6LIy5cufQDhyvNBnFOcdB";

//获取当前已经登录的用户信息(用户名)
function getUserToken(){
    let token = window.localStorage.getItem("51SHOPTOKEN");
    if(!token){
        //token不存在
        return ""
    }
    //token存在
    return token;
}
// 加密密码
function secretPassword(password){
    return CryptoJS.AES.encrypt(password, secretKey).toString();
}
// 解密密码
function unLockPassword(secret){
    return CryptoJS.AES.decrypt(secret,secretKey).toString(CryptoJS.enc.Utf8);
}
// 获取所有用户信息
function getAllUserList(){
    let allToken = window.localStorage.getItem("51SHOPALLTOKEN");
    if(allToken){
        //token存在
        return JSON.parse(allToken);
    }
    //token不存在
    return [];
}
export {
    getUserToken,
    secretPassword,
    getAllUserList,
    unLockPassword,
} 
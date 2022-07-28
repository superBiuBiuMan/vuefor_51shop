

/* 存储用户的购物车数据-分用户 */
function storageUserShopCart(userPhone,storageInfo){
  //读取原来的
  let beforeData = localStorage.getItem("51SHOPCARTUSERINFO");
  beforeData = beforeData ? JSON.parse(beforeData) : [];
  //寻找原来的数据
  if(beforeData.length === 0){
    //为空数组
    beforeData.push({
      phone:userPhone,
      data:[
        ...storageInfo
      ]
    });
  }else{
    //已经包含了数据
    //1.查找是否有用户的数据,有就在原来数据上添加,没有就添加一个新的
    let findItem = beforeData.find(item=>item.phone === userPhone);
    if(findItem){
      //2.有数据
      findItem.data = [...storageInfo];
    }else{
      //3.没有数据
      beforeData.push({
        phone:userPhone,
        data:[
          ...storageInfo
        ]
      })
    }
  }
  //4.存储数据
  localStorage.setItem("51SHOPCARTUSERINFO",JSON.stringify(beforeData));
}

/* 读取用户的购物车数据 */
function getUserCartList(userPhone){
  let cartInfoAll = localStorage.getItem("51SHOPCARTUSERINFO");
  if(cartInfoAll){
    //有数据
    //0.转化为对象格式
    cartInfoAll = JSON.parse(cartInfoAll);
    //1.查找指定的用户的数据
    let findData = cartInfoAll.find(item=>item.phone === userPhone);
    //2.进行处理
    return findData?findData.data:[];//有就返回数据,没有就返回一个空数组
  }else{
    //没有数据
    return [];
  }
}
export {
  storageUserShopCart,
  getUserCartList,
}
import request from "../utils/request"
/**
 * 后面的每次请求都是需要携带token
 * @returns {AxiosPromise}
 */
//查询用户列表
export  const findUserList=(UserQueryVO)=>{
  return request({
    url: "/user/getUserList",
    params:{
      roleName : UserQueryVO.roleName,
      nickname : UserQueryVO.nickname,
      size : UserQueryVO.size,
      current : UserQueryVO.current,
    }
  })
}

export  const  getRoleList=()=>{
  return request({
    url: "/role/getRoleList",
  })
}

//通过id修改用户禁言状态
export  const updateSilenceById=(flag,id)=>{
  return request({
    url: "/user/updateSilenceById",
    method: "put",
    params: {
      id,
      flag,
    }
  })
}
 //通过id删除用户 逻辑删除
export  const deleteById=(id)=>{
  return request({
    url: "/user/deleteByUserId",
    method: "delete",
    params: {
      id,
    }
  })
}
 //通过用户id，修改用户的部分字段 这里是用户头像和用户昵称
export  const updateUserInfo=(data)=>{
  return request({
    url: "/user/updateUserById",
    method: "put",
    data:data,
  })
}
//通过用户id 逻辑删除该用户
export  const logicDeleteUserById=(id)=>{
  return request({
    url: "/user/deleteByUserId",
    method: "delete",
    params:{
      id,
    }
  })
}
//增加用户
export  const addUser=(visitor)=>{
  return request({
    url: "/user/addUser",
    method: "post",
    params:{
         visitorname : visitor.visitorname,
         visitorpwd : visitor.visitorpwd,
         avatar : visitor.avatar,
         email : visitor.email,
         visitorroleid : visitor.visitorroleid
    }
  })
}

//增加用户
export  const getUserList=(current,size,nickname)=>{
  return request({
    url: "/user/getUserListSignal",
    method: "get",
    params:{
      current,size,nickname
    },

  })
}

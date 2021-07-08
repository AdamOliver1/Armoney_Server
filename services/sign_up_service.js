const users = [{ username: "tal", password: "123456" }];

const isUserExist =async(userToSearch)=> {
  let user = users.find(
    (user) =>
      user.username == userToSearch.username
  );
  if (user) {
    return true;
  }
  return false;
}
const signup = async(user) =>{
    let exist = await isUserExist(user)
  if (exist) {
    return { status: false, msg: "username already exist" }
  }
  else {
    users.push(user)
    return true;
  }
}

const login = async(userLoged) =>{
  let exist = await isUserExist(userLoged)
if (exist) {
  let user = users.find(
    (user) =>
      user.username == userLoged.username
  );
  return user
}
else {
return false
}
}
const getUsers =async ()=>{
  return users
}
module.exports = { isUserExist, signup,login,getUsers
 };

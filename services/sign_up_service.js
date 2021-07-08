const db = require('../database/database_requests')

const getUsers = async () => {
  return await db.getAllUsers()
}
const isUserExist = async (userToSearch) => {
  const users = await getUsers()
  const user =users.find(
    (user) =>
      user.email == userToSearch.email
  );
  return user
}
const signup = async (user) => {
  let exist = await isUserExist(user)
  if (exist) {
    return { status: false, msg: "username already exist" }
  }
  else {
 db.addUser(user)
    return true;
  }
}

const login = async (userLoged) => {
  const users = await getUsers()
  const user =users.find(
    (user) =>
      user.email == userLoged.email&& user.password== userLoged.password
  );
  return user

}

module.exports = {
  isUserExist, signup, login, getUsers
};

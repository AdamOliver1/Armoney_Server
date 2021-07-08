const users = [{ username: "tal", password: "123456", email: "sadsada" }];
const getUsers = async () => {
  return users
}
const isUserExist = async (userToSearch) => {
  let user = users.find(
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
    users.push(user)
    return true;
  }
}

const login = async (userLoged) => {
  let user = await isUserExist(userLoged)
  if (user) {
    return user
  }
  else {
    return false
  }
}

module.exports = {
  isUserExist, signup, login, getUsers
};

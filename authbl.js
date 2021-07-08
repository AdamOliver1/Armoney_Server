const users = [{ username: "tal", password: "123456" }];

function validate(loginUser) {
  //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
  let user = users.find(
    (user) =>
      user.username == loginUser.username && user.password == loginUser.password
  );
  if (user) {
    return true;
  }
  return false;
}

module.exports = { validate };

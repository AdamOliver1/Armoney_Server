const express = require('express');
const router = express.Router();
const bl = require("../services/sign_up_service");

router.post("/signup",async (req, res) => {
  let user = req.body
  if (user) {
    let result = await bl.signup(user)
    res.send(result)
  }
  else {
    return false
  }
})
router.get("/users",async (req, res) => {
const users = await bl.getUsers()
res.send(users)
})
module.exports = router
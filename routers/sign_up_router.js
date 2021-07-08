const express = require('express');
const router = express.Router();
const bl = require("../services/sign_up_service");

router.use(express.json())

router.post("/signup", async (req, res) => {
  try {
    let user = req.body
    if (user) {
      let result = await bl.signup(user)
      if(result){
        res.send(result)
      }
    }
    else {
      res.send({ err: "user not valid" })
    }
  } catch (error) {
    res.sendStatus(500)
  }
 
})
router.get("/users", async (req, res) => {
  const users = await bl.getUsers()
  res.send(users)
})
router.post("/login", async (req, res) => {
  try {
    let userBody = req.body
    if (userBody) {
      const user = await bl.login(userBody)
      if (user) {
        res.send(user)
      }
    }
    res.sendStatus(500)
  } catch (error) {
    res.sendStatus(500)
  }

 
})

module.exports = router
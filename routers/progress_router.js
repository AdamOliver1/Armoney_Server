const express = require('express');
const router = express.Router();
const bl = require("../services/progress_service");

router.use(express.json())

router.post("/getPercentSavings", async (req, res) => {
  try {
    let user_id = req.body
    if (user_id) {
      let result = await bl.getPercentSavings(user_id)
      if(result){
        res.send(result)
      }
    }
    else {
      res.send({ err: "user id not valid" })
    }
  } catch (error) {
    res.sendStatus(500)
  }
 
})


router.get("/getExpensesById", async (req, res) => {
    try {
        let user_id = req.body
        if (user_id) {
          let result = await bl.getExpensesById(user_id)
          if(result){
            res.send(result)
          }
        }
        else {
          res.send({ err: "user id not valid" })
        }
      } catch (error) {
        res.sendStatus(500)
      }
})


router.get("/getSavingsPercentById", async (req, res) => {
    try {
        let user_id = req.body
        if (user_id) {
          let result = await bl.getSavingsPercentById(user_id)
          if(result){
            res.send(result)
          }
        }
        else {
          res.send({ err: "user id not valid" })
        }
      } catch (error) {
        res.sendStatus(500)
      }

 
})

router.post("/addNewExpense", async (req, res) => {
    try {
        let expence = req.body
        if (expence) {
          let result = await bl.addNewExpense(expence)
          if(result){
            res.send(result)
          }
        }
        else {
          res.send({ err: "user id not valid" })
        }
      } catch (error) {
        res.sendStatus(500)
      }

 
})


module.exports = router
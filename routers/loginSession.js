//import of npm packages
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const bl = require("../authbl");
const router = express.Router();

//able to use session for user
router.use(
  session({ secret: "anything", resave: true, saveUninitialized: false })
);
//initialize passport ctor
router.use(passport.initialize());
//command for express to import session from passport library
router.use(passport.session());
// helper middleware for body parse (json object)
router.use(express.json());
// inject the local authentication implementation
passport.use(
  new LocalStrategy(function (username, password, done) {
    if (bl.validate({ username, password })) {
      return done(null, { username, password });
    } else {
      return done("unauthorized access", false);
    }
  })
);
//helper function of pasport for json
passport.serializeUser(function (user, done) {
  if (user) done(null, user);
});
//helper function of pasport for json
passport.deserializeUser(function (id, done) {
  done(null, id);
});

const sessionAuth = () => {
  return (req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      if (error) res.status(400).json({ statusCode: 400, message: error });
      //save local session
      req.login(user, function (error) {
        if (error) return next(error);
        res.send("OK");
      });
      // its a little trick here, Its IIFE since in currnet scope of calling from
      //post message,  we have outisde members called request response and next since its  middlwrer
    })(req, res, next);
  };
};

const isLoggedIn = (req, res, next) => {
  console.log("session ", req.session);
  if (req.isAuthenticated()) {
    return next();
  }
  return res
    .status(400)
    .json({ statusCode: 400, message: "not authenticated" });
};

//{"username": "tal", "password" : "123456"}
router.post("/login", sessionAuth());

router.get("/islogin", isLoggedIn, (req, res) => {
  res.json("authenticated  ! ");
});

module.exports = router;

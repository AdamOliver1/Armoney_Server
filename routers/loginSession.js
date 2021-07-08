//import of npm packages
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bl = require("../services/sign_up_service");

const router = express.Router();

//able to use session for user
router.use(
  session({ secret: "anything", resave: true, saveUninitialized: false })
);
router.use(passport.initialize());
router.use(passport.session());
router.use(express.json());
passport.use(
  new LocalStrategy(function (username, password, done) {
    if (bl.isUserExist({ username, password })) {
      return done(null, { username, password });
    } else {
      return done("unauthorized access", false);
    }
  })
);
passport.serializeUser(function (user, done) {
  if (user) done(null, user);
});
passport.deserializeUser(function (id, done) {
  done(null, id);
});

const sessionAuth = () => {
  return (req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      if (error) { res.status(400).json({ statusCode: 400, message: error }); }
      req.login(user, function (error) {
        if (error) { return next(error); }
        console.log(user);
        res.send("OK");
      });
    })(req, res, next);
  };
};

const isLoggedIn = (req, res, next) => {
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

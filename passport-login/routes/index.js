const express = require('express');
const router = express.Router();

const User = require('../models/user');
// Home page
router.get('/', (req, res, next) => {
  res.render('index');
});

// login form
router.get('/login', (req, res, next) => {
  res.render('login');
});

// register form
router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', (req, res, next) => {
  const { name, username, email, password, password2 } = req.body;

  req.checkBody('name', 'Name field is required!').notEmpty();
  req.checkBody('email', 'Email field is required!').notEmpty();
  req.checkBody('email', 'Email must be a valid email address!').isEmail();
  req.checkBody('username', 'Username field is required!').notEmpty();
  req.checkBody('password', 'Password is required!').notEmpty();
  req.checkBody('password2', 'Passwords do not match!').equals(req.body.password);

  let errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors
    });
  } else {
    const newUser = new User({
      name,
      username,
      email,
      password
    });

    User.registerUser(newUser, (err, user) => {
      if (err) throw err;
      req.flash('success_messages', 'You are register and you can login.');
      res.redirect('/login');
    });
    return;
  }
});

module.exports = router;

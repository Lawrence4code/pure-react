const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const mongooose = require('mongoose');
const passport = require('passport');

// routes
const index = require('./routes/index');
// const users = require('./routes/users');

// port setup
const port = 3000;

// app instants
const app = express();

// setup to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// for handling and setting views
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// session setup

app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
  })
);

// express flash message setup
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages');
  res.locals.error_messages = req.flash('error_messages');
  next();
});

// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(
  expressValidator({
    errorFormatter: (param, msg, value) => {
      var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// setting up the route
app.use('/', index);
// app.use('/users', users);

// start server
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
//here
const cookieParser  = require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
//here
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://evrasalexander:kable123@clusterjwt.rsoo0.mongodb.net/node-auth?';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true,})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);

//here
// app.get('/set-cookies', (req, res) => {

//   res.cookie('newUser', false);

//   res.cookie('isEmployee', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: true});

//   res.send('You got the cookie, check the application tab in the inspect tool!')

// });

// app.get('/read-cookies', (req, res) => {

//   const cookies = req.cookies;

//   console.log(cookies.newUser);

//   res.json(cookies);

// });
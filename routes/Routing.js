const express = require('express');
const Router = express.Router();
const {getLanding} = require('./Functions');
const {register} = require('./register');
const {login} = require('./Login');
const util = require('./util/Auth');
const { check, validationResult } = require('express-validator');
const {middleware} = require('./util/Auth');
const {auth, charts, profile} = require('./Auth');

//@ All of the get Routes
Router.get('/', getLanding);

//@ All protected Routes
Router.get('/users', middleware , auth );
Router.get('/charts', middleware , charts);
Router.get('/me', middleware ,  profile);



//@All of the Post Routes
Router.post('/register', [
    check('firstname', 'Name is required').not().isEmpty(),
    check('lastname', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
   register);



Router.post('/login',[
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
    
], login );





module.exports = Router;
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/dbconnector');
const chalk = require('chalk');
const config = require('config');


connection.connect(function(err){

    if(err) throw err;

    connection.query("CREATE DATABASE jpmorganDB", function(err, result){        
        console.log("Database Created successfully");
    });

    console.log("..................................")
    console.log(chalk.bgGreen("Successfully connected to Databases"));
})


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(cors());
app.use('/', require('./Routes/Routing'));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.use(function(req, res, next){
    res.status(404);
    if(req.accepts('json')){
        res.json(errormessage);
    }
    if(req.accepts('html')){
        res.render('error');
    }
    if(req.accepts('text')){
        res.send(errormessage);
    }
})


module.exports = app;
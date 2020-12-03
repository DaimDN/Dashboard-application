var mysql = require('mysql');
const config = require('config');
const { connect } = require('http2');


var connection = mysql.createConnection({
    host:   config.get('host'),
    user: config.get('DBname'),
    password: config.get('DBpassword'),
    database: config.get('database')
  });
  


  module.exports = connection;
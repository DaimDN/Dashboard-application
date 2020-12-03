const {
	check,
	validationResult
} = require('express-validator');

const errors = "500 Internal Server error";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltround = 10;
const config = require('config');
const connection = require('../config/dbconnector');
const { has } = require('config');



module.exports.register =  (req, res, next) => {
	const err = validationResult(req);
	if (!err.isEmpty()) {
		return res.status(400).json({
			errors: err.array()
		});
	}
	var {
		firstname,
		lastname,
		email,
		password
    } = req.body;

            var query = "SELECT * FROM users where email='"+ email+"'";
            connection.query(query, function (err, result, fields) {
              if (err) throw err;
            
              if(result.length === 0){

                    bcrypt.genSalt(saltround, function(err, salt) {
                        bcrypt.hash(password, salt, function(err, hash) {
                            password = hash;                            
                             var data = {firstname, lastname, email, password};
                                 var sql = "INSERT INTO users (firstname, lastname, email, password) VALUES('" +firstname + "','" + lastname+ "','" + email + "','" + password+ "')";
                                connection.query(sql, function (err, result) {
                                    if (err) throw err;
                                    
                                    var newsql = "SELECT * FROM users where email='" + email +"'";
                                    connection.query(newsql, function(err, newdata){
                                       
                                        const payload = {
                                            user: {
                                                id: newdata[0].id
                                            }
                                        };

                                        jwt.sign(
                                            payload,
                                            config.get('secret'),
                                            { expiresIn: '5 days' },
                                            (err, token) => {
                                              if (err) throw err;
                                              res.json({ token });
                                            }
                                          );



                                    })
                                });
                           
                        });
                    });

              }
              else{
                res.status(400).json({msg: 'user already exists'});
              }

              
            });

}

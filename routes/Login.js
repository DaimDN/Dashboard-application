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


module.exports.login = (req, res, next)=>{
    const newcheck = validationResult(req);
    if(!newcheck.isEmpty()){
        res.status(400).json({msg: newcheck.array()})
    }

    var {email, password} = req.body;

    var query = "SELECT * FROM users where email='"+ email+"'";
    connection.query(query, function (err, result, fields) {
        if (err) throw err;
      
        if(result.length === 0){
            res.json({msg: "User doesnt exist"});

        }
        else{
            
            var pass = result[0].password;
            bcrypt.compare(password, pass).then(function(results) {
                
                if(results === true){
                    
                    const payload = {
                        user: {
                        id: result[0].id
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
                    
                }
                else{
                    res.json({msg: "Invalid password"});
                }
            });
        }
    });
    
}
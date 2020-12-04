
const connection = require('../config/dbconnector');

module.exports.auth = async(req, res, next)=>{

    try {
        const userid = req.user.id;
            connection.query("SELECT * FROM users where id = '" + userid+ "'", function (err, result, fields) {
              if (err) throw err;

              var firstname = result[0].firstname;
              var lastname = result[0].lastname;
              var email = result[0].email;
              
              var data = {firstname, lastname, email};
              
              res.json(data);
            });
        
        
        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"});
        
    }
}

module.exports.profile = async(req, res, next)=>{

    try {
        const userid = req.user.id;
            connection.query("SELECT * FROM users where id = '" + userid+ "'", function (err, result, fields) {
              if (err) throw err;

              var firstname = result[0].firstname;
              var lastname = result[0].lastname;
              var email = result[0].email;
              
              var data = {firstname, lastname, email};
              
              res.json(data);
            });
        
        
        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"});
        
    }
}

module.exports.charts = async(req, res, next)=>{

    try {
        const userid = req.user.id;
            connection.query("SELECT * FROM users where id = '" + userid+ "'", function (err, result, fields) {
              if (err) throw err;

              var firstname = result[0].firstname;
              var lastname = result[0].lastname;
              var email = result[0].email;
              
              var data = {firstname, lastname, email};
              
              res.json(data);
            });
        
        
        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"});
        
    }
}
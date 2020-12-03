
const message = "500 Internal Server error";


module.exports.getLanding = async(req, res, next)=>{
    try {

        res.json({msg: "welcome"})

        
    } catch (error) {
        res.json({msg: message});
        
    }
}

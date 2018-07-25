let express=require('express')
let router=express.Router();

let loginController = require('./controller')

router.use('/login',loginController.loginadd)


module.exports=router;
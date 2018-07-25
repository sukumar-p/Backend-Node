let express=require('express')
let router=express.Router();

let registerController = require('./controller')

router.use('/signup',registerController.registeradd)


module.exports=router;
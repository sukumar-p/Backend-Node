let express=require('express')
let router=express.Router();

let userListController = require('./controller');
let delListController = require('./controller');

router.use('/userlist',userListController.useradd);
router.use('/deletelist',delListController.deleleteList)


module.exports=router;
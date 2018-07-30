let express=require('express')
let router=express.Router();

let userListController = require('./controller');
let delListController = require('./controller');
let childUserlistController = require('./controller');

router.use('/userlist',userListController.useradd);
router.use('/deletelist',delListController.deleleteList);
router.use('/childUserlist',childUserlistController.childUserlist)


module.exports=router;
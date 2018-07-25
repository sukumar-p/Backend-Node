let express = require('express');

let router = express.Router();

// let loginRouter = require('../api/v1/login/route');
let registerRouter = require('../api/v1.0/singup/route');
let loginRouter = require('../api/v1.0/login/route');
let userRouter = require('../api/v1.0/userslist/route');
// let submitRouter = require('../api/v1/submitadd/route')


// router.use('/create',loginRouter)
router.use('/user',registerRouter);
router.use('/user1',loginRouter);
router.use('/user3',userRouter);
// router.use('/add',submitRouter)
// router.get('/getDetails/:id',logController.getUserDetails)


module.exports = router;
var express = require('express');
var router = express.Router();
let controluser = require('../controller/userpuzzle')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/Create' , controluser.USERCREATE)
router.get('/Find' , controluser.USERFIND)
router.patch('/:id' , controluser.USERUPDATE)
router.delete('/:id' , controluser.USERDELETE)
module.exports = router;

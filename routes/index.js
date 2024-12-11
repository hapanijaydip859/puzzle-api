var express = require('express');
var router = express.Router();
let ControllBasic = require('../controller/basicpuzzle')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Create', ControllBasic.BASICCREATE)
router.get('/Find',ControllBasic.BASICREAD)
router.patch('/:id',ControllBasic.BASICUPDATE)
router.delete('/:id', ControllBasic.BASICDELETE)


module.exports = router;

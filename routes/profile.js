var express = require('express');
var router = express.Router();
let ControllProfile = require('../controller/profile')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Create', ControllProfile.PROFILECREATE)
router.get('/Find',ControllProfile.PROFILEFIND)
router.patch('/:id',ControllProfile.PROFILEUPDATE)
router.delete('/:id', ControllProfile.PROFILEDELETE)


module.exports = router;
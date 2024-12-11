var express = require('express');
var router = express.Router();
let Controllquestion = require('../controller/question')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Create', Controllquestion.QUESTIONCREATE)
router.get('/Find',Controllquestion.QUESTIONFIND)
router.patch('/:id',Controllquestion.QUESTIONUPDATE)
router.delete('/:id', Controllquestion.QUESTIONDELETE)


module.exports = router;
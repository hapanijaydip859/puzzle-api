var express = require('express');
var router = express.Router();
let ControllComment = require('../controller/comment')

/* GET home page. */


router.post('/Create', ControllComment.COMMENTCREATE)
router.get('/Find',ControllComment.COMMENTFIND)
router.patch('/:id',ControllComment.COMMENTUPDATE)
router.delete('/:id', ControllComment.COMMENTDELETE)


module.exports = router;
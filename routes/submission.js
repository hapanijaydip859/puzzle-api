var express = require('express');
var router = express.Router();
let ControllSubmission = require('../controller/submission')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/Create', ControllSubmission.SUBMISSIONCREATE)
router.get('/Find',ControllSubmission.SUBMISSIONFIND)
router.patch('/:id',ControllSubmission.SUBMISSIONUPDATE)
router.delete('/:id', ControllSubmission.SUBMISSIONDELETE)


module.exports = router;
var express = require('express');
var router = express.Router();
let ControllCategory = require('../controller/category')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/Create', ControllCategory.CATEGORYCREATE)
router.get('/Find',ControllCategory.CATEGORYFIND)
router.patch('/:id',ControllCategory.CATEGORYUPDATE)
router.delete('/:id', ControllCategory.CATEGORYDELETE)


module.exports = router;

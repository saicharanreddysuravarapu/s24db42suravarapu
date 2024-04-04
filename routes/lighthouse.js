// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('lighthouse', { title: 'Search Results - Light House' });
// });

// module.exports = router;

var express = require('express');
const lighthouse_controlers= require('../controllers/lighthouse');
var router = express.Router();
/* GET costumes */
router.get('/', lighthouse_controlers.lighthouse_view_all_Page );
module.exports = router;
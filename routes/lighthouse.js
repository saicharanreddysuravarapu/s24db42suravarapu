var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lighthouse', { title: 'Search Results - Light House' });
});

var express = require('express');
const lighthouse_controlers= require('../controllers/lighthouse');
var router = express.Router();
/* GET costumes */
router.get('/', lighthouse_controlers.lighthouse_view_all_Page );
/* GET detail costume page */
router.get('/detail', lighthouse_controlers.lighthouse_view_one_Page);
/* GET create costume page */
router.get('/create', lighthouse_controlers.lighthouse_create_Page);
/* GET create update page */
router.get('/update', lighthouse_controlers.lighthouse_update_Page);
/* GET delete costume page */
router.get('/delete', lighthouse_controlers.lighthouse_delete_Page);
module.exports = router;
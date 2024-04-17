var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lighthouse', { title: 'Search Results - Light House' });
});

var express = require('express');
const lighthouse_controlers= require('../controllers/lighthouse');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET costumes */
router.get('/', lighthouse_controlers.lighthouse_view_all_Page );
/* GET detail costume page */
router.get('/detail', lighthouse_controlers.lighthouse_view_one_Page);
/* GET create costume page */
router.get('/create',secured, lighthouse_controlers.lighthouse_create_Page);
/* GET delete costume page */
router.get('/delete',secured, lighthouse_controlers.lighthouse_delete_Page);
/* GET update costume page */
router.get('/update', secured, lighthouse_controlers.lighthouse_update_Page);
module.exports = router;
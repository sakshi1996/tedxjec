var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/landing', function(req, res) {
  res.render('landing');
});

router.get('/generic', function(req, res) {
  res.render('generic');
});

router.get('/elements', function(req, res) {
  res.render('elements');
});

router.get('/pavitrashetty', function(req, res) {
  res.render('pavitrashetty');
});
router.get('/arvindpassey', function(req, res) {
  res.render('arvindpassey');
});
router.get('/raul', function(req, res) {
  res.render('raul');
});
module.exports = router;

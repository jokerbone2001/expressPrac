var express = require('express');
var router = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tweet', function(req, res, next) {
  res.render('index', { title: 'tweet' , contents: 'get a list of tweet'});
});
router.get('/tweet/post', function(req, res, next) {
  res.render('index', { title: 'tweet' , contents: 'post a new tweet'});
});

router.get('/tweet/:id', function(req, res, next) {
  res.render('index', { title: 'tweet' , contents: `delete a tweet id ${req.params.id}`});
});

module.exports = router;

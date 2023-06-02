var express = require('express');
var router = express();
var data = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tweet', function(req, res, next) {
    console.log(data);
    res.render('index', { 
    // id: data[0].id, 
    // message: data[0].message, 
    // author: data[0].author,
    // datatime: data[0].datatime
    tweets: data
    });
    

});

router.post('/tweet', function(req, res, next) {
  data.push(req.body);
  console.log(data);
  res.render('index', { 
    tweets: data
    });
  res.end();
});

router.get('/tweet/:id', function(req, res, next) {
  console.log(req.params.id);

  let tweet = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id);

    if (data[i].id == req.params.id) {
      tweet[0] = data[i];
      break;
    }
  }  
  console.log(tweet);
  if (tweet.length >0) {
    res.render('index', {tweets: tweet});
    res.end();
  } else {
    res.write('tweet not found');
    res.end();
  }
});


router.delete('/tweet/:id', function(req, res, next) {
  let index = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == req.params.id) {
      index = i;
      break;
    }
  }  
  if (index !== -1) {
    data.splice(index, 1);
    res.write('delete successfully!');
    res.end();
  } else {
    res.write('tweet not found');
    res.end();
  }
});

//let index = data.findIndex((tweet) => tweet.id === req.params.id);

module.exports = router;

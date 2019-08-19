var express = require('express');
var router = express.Router();
var request = require('request');

const rootURL = 'https://api.github.com/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {userData: null});
});

router.post('/', function(req, res, next) {
  var options = {
    url: rootURL + 'users/' + req.body.username, 
    headers: {
      'User-Agent': 'bethsmith0623',
      'Authorization': 'token ' + process.env.GITHUB_TOKEN 
    }
  };
  request(options, function(err, response, body){
    var userData = JSON.parse(body);
      res.render('index', {userData});
  });
});


module.exports = router;

var express = require('express');
var router = express.Router();
//npm install eazyminer
console.log("Hello World")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive'});
});

module.exports = router;

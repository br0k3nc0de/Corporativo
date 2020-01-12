var express = require('express');
var users = require('./../data/users')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/login', function(req, res, next) {
  let findUser
  let dataUsers = users.admins
  
  const { username, password } = req.query

  console.log( username,password )

  for(let user of dataUsers){
      if( username === user.username && password === user.password ){
          findUser = user
          break
      }
  }

  if( findUser != undefined || findUser != null){
      res.send(findUser)
  }else{    
      res.sendStatus(404)
  }
  
});

module.exports = router;

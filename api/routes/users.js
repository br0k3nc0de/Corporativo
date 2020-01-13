const fs = require('fs');
var users = require('./../data/users')
var express = require('express');
var router = express.Router();

var AllUsers = users.admins
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

router.post('/singup', function(req, res, next) {
    let userdate = req.body

    AllUsers.push(userdate)
    updateFileServices()

    res.send(users)
});


function updateFileServices(){
  fs.writeFile('./data/users.json', JSON.stringify(users,null,5), (err) => {
      if (err) throw err;
      console.log('Archivo actualizado Satisfactoriamente: users.json'); 
  });
}

module.exports = router;

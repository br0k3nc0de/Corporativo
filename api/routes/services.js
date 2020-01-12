var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/all", function(req, res, next) {

    let resp = {
        services : [
            {
                id: 0 ,
                name: 'service0',
                description: 'another original',
                price: 'value',
            },
            {
                id: 1 ,
                name: 'service1',
                description: 'another',
                price: 'value',
            }
        ]
    }
    
    res.send(JSON.stringify(resp));
});

module.exports = router;
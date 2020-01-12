var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/all", function(req, res, next) {

    let resp = {
        services : [
            {
                image: 'https://contabilidad.xyz/wp-content/uploads/2019/01/im1.jpg',
                name: 'service0',
                description: 'another original',
                price: 'value',
            },
            {
                image: 'https://www.ie.edu/insights/wp-content/uploads/2017/02/Negocios-que-se-quitan-el-corse-tradicional.jpg',
                name: 'service1',
                description: 'another',
                price: 'value',
            }
        ]
    }
    
    res.send(JSON.stringify(resp));
});

module.exports = router;
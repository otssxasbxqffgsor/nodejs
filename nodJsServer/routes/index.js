var express = require('express');
var cros = require('cors');
var router = express.Router();
//res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

/* GET home page. */
router.get('/', cros({origin :'*',maxAge:3600, methods:'GET',allowedHeaders:'Access-Control-Allow-Header'}),function(req, res, next) {
    res.send(JSON.stringify({ "response":"Hello Radware This is final demo for Larry!" }));
});

module.exports = router;

'use strict'

var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {title: 'PAGINA DE INICIO'});
});

module.exports = router;
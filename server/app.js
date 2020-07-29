'use strict'

var express = require("express");
var cors = require('cors')
var bodyParser = require("body-parser");
var mssql = require("mssql");
var app = express();
var index = require('./routes/index');
var direcciones = require('./routes/direcciones');

var config = {
    user:  "SA",
    password: "Abcde.12345678",
    server: "localhost",
    port: 1433,
    database: "SampleDB"
};

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(function(req,res, next){
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept', 'application/json', 'text/json');
    res.header('Acees-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', index);
app.use('/direcciones', direcciones);

app.get('/json/direcciones', function(req,res,next){
    var dbConn = new mssql.ConnectionPool(config);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        request.query("select * from dbo.direcciones").then(function (resp) {
            var data = {};
            data = resp.recordset;
            res.send(data);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

module.exports = app;
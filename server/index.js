'use strict'

var mssql = require("mssql");
var app = require('./app');

app.set('view engine', 'ejs');

var port = process.env.PORT || 5000;

//Initializing connection string
var config = {
    user:  "SA",
    password: "Abcde.12345678",
    server: "localhost",
    port: 1433,
    database: "SampleDB"
};

var connection = new mssql.ConnectionPool(config, function(err, res){
    if(err){
        throw err;
    } else {
        console.log("CONECTADO CORRECTAMENTE A LA BASE DE DATOS");
        app.listen(port, function(){
            console.log("Api Rest Running http://localhost:"+port);
        });
    }
});


module.exports = app;
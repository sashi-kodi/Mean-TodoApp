/**
 * Created by sekharh on 2/4/2017.
 */
var express= require('express');
var bodyparser = require('body-parser');

var app= express();
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/', require('./routes'));

app.listen(3000);
console.log('server is listening on port 3000');
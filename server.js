var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.text());
app.use(bodyParser.raw({ type: 'application/vnd.api+json' }))


app.listen(PORT, function (){
 console.log('Listening on port 3000');
});


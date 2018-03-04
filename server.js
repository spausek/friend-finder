var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.text());
app.use(bodyParser.raw({ type: 'application/vnd.api+json' }))
app.use(express.static('app/view'));

require('./app/routing/api.js')(app); 
require('./app/routing/html.js')(app);


app.listen(PORT, function (){
 console.log('Listening on port 8080');
});

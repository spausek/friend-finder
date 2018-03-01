const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use(bodyParser.text());
app.use(bodyParser.raw({ type: 'application/vnd.api+json' }))

app.listen(PORT, function (){
 console.log('Listening on port 3000');
});
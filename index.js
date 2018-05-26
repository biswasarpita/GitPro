var express = require('express');
var config = require('./config');
app = express();

app.get('/v1/getMessage', function(req, res){
    res.send({
        message: config.getMessage
    })
});

app.get('/v1/displayMessage', function(req, res){
    res.send({
        message: config.displayMessage
    })
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});
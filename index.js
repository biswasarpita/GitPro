var express = require('express');

app = express();

app.get('/v1/getMessage', function(req, res){
    res.send({
        message: 'Successful GET'
    })
})

app.get('/v1/getTimestamp', function(req, res){
    var epochTimestamp = Date.now();
    var timestamp = new Date(epochTimestamp);
    res.send({
        message: timestamp
    })
})

app.get('/v1/displayMessage', function(req, res){
    res.send({
        message:'Hello!!! I am here'
    })
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
})
//lstr-001 1st page
var express = require('express');
var app = express();

app.get('/i', (req, res) => {
    res.send({hello:"world"});
});

app.listen(process.env.PORT, function(){
    console.log('server has started on port 9600')
});

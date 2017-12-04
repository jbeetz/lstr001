//lstr-001 1st page
var express = require('express');
var app = express();

app.get('/index', (req, res) => {
    res.send({"hello":"world"});
});

app.listen(9600, function(){
    console.log('server has started on port 9600')
});
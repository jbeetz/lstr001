//first listr
const twilio = require('twilio');
const express = require('express');
const app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) =>{
    res.sendfile('./index.html');
});

app.post('/', (req, res) => {
  const mess = req.body.Body;

  io.on('connection', (socket) => {
    io.emit('sms',mess);
    console.log('emitted:',mess);
  });

  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for boondocks');
  
  console.log(mess);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});




const PORT = 9600;
http.listen(PORT);

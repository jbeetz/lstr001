//lstr-001 1st page
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  app.get('/', (req, res) => {res.send(twiml.toString());
  });
  res.end(twiml.toString());
});

http.createServer(app).listen(9600, () => {
  console.log('Express server listening on port 9600');
});

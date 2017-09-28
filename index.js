const express = require('express'); 
const app = express(); 
const path = require('path'); 
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err) {
    console.log('Could NOT connect to database: ', err);
  }else {
    console.log('Connected to database: ' +config.db);
  }
});

app.use(express.static(__dirname + '/client/dist/'));


app.get('/Angular2', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3200, () => {
  console.log('Listening on port 3200..');
});

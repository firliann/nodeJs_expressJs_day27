var express = require('express');
var app = express();

app.get('/name', function (req, res) {
    console.log('Muhammad Lutfi Firlian')
    res.send("Welcome, Muhammad Lutfi Firlian")
  })
  app.get('/name/first', function (req, res) {
    console.log('Muhammad')
    res.send("Welcome, Muhammad")
  })
  app.get('/name/last', function (req, res) {
    console.log('Firlian')
    res.send("Welcome, Firlian")
  })

app.listen(3000)
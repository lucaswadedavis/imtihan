var fs = require('fs');
var express = require('express');
var imtihan = require('./imtihan.js');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
app.use(express.static('../client'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json() );

var jsonParser = bodyParser.json();

var makeTestFile = function(){
  var indexFile = "../client/spec/index.html";
  var testFile = "../client/spec/test.js";

  fs.writeFile(indexFile,imtihan.indexFile(),function(err){
    if (err){
      console.log(err);
    } else {
      console.log('indexFile written.!');
    }
  });

  fs.writeFile(testFile,imtihan.testFile(),function(err){
    if (err){
      console.log(err);
    } else {
      console.log('testFile written. ');
    }
  });

};

var runTestFile = function(){

};


app.get('/', function(req, res){
 res.send('It worked');
});

app.post('/test',function(req, res){
  if(!req.body) { return res.sendStatus(400);}
  makeTestFile();
  runTestFile();
  console.log(req.body);
  console.log(req.body.a);
  res.send(req.body);
  res.sendStatus(200);
});

var server = app.listen(8080, function(){
  console.log('Express is listening on port 8080');
});


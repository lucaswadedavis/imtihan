var fs = require('fs');
var express = require('express');
var imtihan = require('./imtihan.js');

var app = express();
var router = express.Router();

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
  makeTestFile();
  runTestFile();
  res.send('It worked');
});

var server = app.listen(8080, function(){
  console.log('Express is listening on port 8080');
});


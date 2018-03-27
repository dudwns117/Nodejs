const express = require('express');
const app=express();
const fs = require('fs');

app.get('/get',function(req, res){
	var text = fs.readFileSync("log.txt",'utf8');
	console.log(text);
	res.end(text);
	})
/*
fs.readFileSync('log.txt','utf-8',function(err,data){
  if(err) throw err

  console.log("data="+ data);
});
console.log("was here");
*/

app.listen(1576,function(){
	console.log("Listening!");
});

const express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.render('app.ejs');
});

app.listen(3000);
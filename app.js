const express = require('express');
const app = express();
app.set('views');
app.set('view engine','ejs');


app.get('/',(req,res)=>{
res.render('home.ejs');
});






app.listen(2500);


var express =require ('express');
var path = require('path');
const port = process.env.PORT || 3000;

var app=express();
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`server is starting at ${port}`);
});
let express=require('express');

app= express();

app.get('/', function (req, res){
    res.status(401).end();
});



app.listen(5050, function (){
    console.log("server run success")
});
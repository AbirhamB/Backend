const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile(__dirname +"/bmiCalculator.html")
})
app.post("/",function(req, res){
    var num1= Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1/(num2*num2);
    res.send(" Hey, your BMI calculation is " + result);
})

  

app.listen(5000, function(){
    console.log("Server has started on 5000!")
})
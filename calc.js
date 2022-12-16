const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/inde.html");
}); 

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(req, res){
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var result = a + b;
    res.send("Sum of both number is: " + result)
});

app.post("/bmicalculator", function(req, res){
   var we = Number(req.body.weight)
   var he = Number(req.body.height)
   var bmi = we/(he*he)
   
   res.send("Calculated BMI is: " + bmi)
});




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})
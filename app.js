var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = "";
    if (animal === "pig"){
        sound = "oink";
    } else if (animal === "cow"){
        sound = "moo";
    } else if (animal === "dog"){
        sound = "woof woof!";
    }
    res.send("THE " + animal + " says " + sound);
});

app.get("/repeat/:word/:number", function(req, res){
    var x = req.params.word;
    var n = Number(req.params.number);
    var result = "";

    for(var i = 0; i < n; i++){
        result += x + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("sorry,page not found.....what the f*** are you doing with your life?");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res){
    res.send("Hello world");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
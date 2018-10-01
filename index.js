var express = require("express"),
    app = express(),
    port = process.env.PORT,
    bodyParser = require("body-parser");
    
var todoRoutes = require("./routes/todos");

app.use("/api/todos", todoRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, function() {
   console.log("Server has started..."); 
});
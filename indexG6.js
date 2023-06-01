var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var passport = require("passport");
var path = require("path");
var session = require("express-session");

var setUpPassport = require("./setuppassport");
var routes = require("./routes");
var routesData = require("./routesData");
//new
let http = require('http');
//new

var app = express();

//27017 seems to be the port number used by mongod
//mongoose.connect("mongodb://localhost:27017/userdb");   
mongoose.connect("mongodb://127.0.0.1:27017/group623");   
setUpPassport();

app.set("port", process.env.PORT || 3006);


// app.use('/js', express.static('./public/js'));


app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser.urlencoded({ extended: false }));
//new
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./public'));
//new
app.use(cookieParser());

app.use(session({
  secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.use(routesData);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});

//new
// let savedNotes = "";

let server = http.createServer(app);

app.get("/",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});
// app.get("/type",function(req,res) {
//     res.sendFile(path.resolve(__dirname,"public/views/type.html"));
// });

app.get("/home.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/home.js"));
});
app.get("/help.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/help.js"));
});
app.get("/game.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/game.js"));
});
app.get("/call.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/call.js"));
});
app.get("/login.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/login.js"));
});
app.get("/mail.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/mail.js"));
});
app.get("/socialLogin.js",function(req,res) {
    res.sendFile(path.resolve(__dirname,"public/js/socialLogin.js"));
});
// app.get("/saveNotes", function(req, res){
//     console.log(req.query.notes);
//     savedNotes = req.query.notes;
//    res.json({});
// });
// app.get("/retNotes", function(req, res){
//    res.json({notes:savedNotes});
// });


// let port = process.env.PORT || 3006;

// server.listen(port);

module.exports = app;
//new

// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
console.log("Dir name", __dirname);

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
  response.render('index');
})


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
    response.render('cats');
})
app.get("/cuddles", function (request, response){
  var cuddles = {name: "Cuddles", food: "spaghetti", age: 3, sleepingspots: ['under the bed', 'in a sunbeam']};
    response.render('details', {cat: cuddles});
})
app.get("/meow", function (request, response){
  var meow = {name: "Meow", food: "cheese", age: 1, sleepingspots: ['on your neck', 'on your laptop']};
    response.render('details', {cat: meow});
})
app.get("/snowball", function (request, response){
  var snowball = {name: "Snowball", food: "pizza", age: 5, sleepingspots: ['hammock', 'in a boot']};
    response.render('details', {cat: snowball});
})
app.get("/mittens", function (request, response){
  var mittens = {name: "Mittens", food: "tuna", age: 10, sleepingspots: ['in the sink', 'in a cup', 'in a box']};
    response.render('details', {cat: mittens});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

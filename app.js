const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//const redis = require('redis');

// Create Redis Client
// var client = redis.createClient();

// client.on('connect', function() {
//   console.log('Connected to Redis...');
// });




// Init app
const app = express();

//set view engine

app.engine('hbs', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// set body parse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// set public dir
app.use('/public',express.static(__dirname + '/public'));



app.get('/', function(req, res) {
  res.render('login')
})

app.get('/login', function(req, res) {
  res.render('login')
})

app.post('/login', function(req, res) {
  console.log(req.body)
  res.render('login')
})
app.get('/two', function(req, res) {
  res.render('two')
})


// Set Port
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started on port ' + port);
});

// require all dependencies
var express = require('express');
var app = express();
var cons = require('consolidate')
const path = require('path');

app.use(express.static(path.join(__dirname, './')));

// set up the template engine
app.engine('pug', cons.pug);
app.engine('html', cons.ejs);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function (req, res) { 
    // render the 'index' template, and pass in a few variables
    res.render('index', { title: 'Hey', message: 'Hello there!' });
 
});

// GET response for '/'
app.get('/caas', function (req, res) { 
    // render the 'index' template, and pass in a few variables
    res.render('index', { title: 'Hello', message: 'Hello CAAs!' });
 
});

//Note: you need to explicitly use the extension
//to use a different render engine.
app.get('/csv', function(req, res){
    res.render('index.html', {
      title: 'Consolidate.js: Html'
    });
  });
 
// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
 
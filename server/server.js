const express = require('express');
const http = require('http');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static('./dist'));
app.engine('.hbs', exphbs({ extname: '.hbs', layout: false }));
app.set('view engine', '.hbs');
app.set('views', './server');

app.get('/', function handleRequest(req, res) {
  res.render('index', {});
});

module.exports = http.createServer(app);

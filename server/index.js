var app = require('./server');
var port = process.env.PORT || 3001;

app.listen(port, function listen() {
  console.log('Listening http://localhost:' + port);
});

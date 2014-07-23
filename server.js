var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.logger());
app.use(express.static(__dirname + '/build'));
app.listen(port, function() {
  console.log("Listening on " + port);
});

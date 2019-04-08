var path = require('path');
var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/public'));
app.get('*', function response(req, res) {
  res.render(path.join(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s.', app.get('port'));
});
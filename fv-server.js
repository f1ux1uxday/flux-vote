var path = require('path');
var compression = require('compression')
var mongoose = require('mongoose');
var express = require('express');

var QModel = require('./src/models/fv-questionModel')

mongoose.connect('mongodb://localhost/FVDB')
// mongoose.connection.once('open', function() {
//   console.log('wtf')
// })

var app = express();


app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8080);

app.get('/api/recent', (request, response) => {
  QModel.find((error, recentQuestions) => {
    if (error) {
      response.send('unable to retrieve data')
    } else {
      response.json(recentQuestions)
    }
  })
})

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

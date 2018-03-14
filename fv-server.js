var path = require('path');
var compression = require('compression')
var mongoose = require('mongoose');
var express = require('express');

var Questions = require('./src/models/fv-questionsModel')

mongoose.connect('mongodb://localhost/FVDB', err => {
  if (err) {
    console.log(err)
  }
})

var app = express();

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8080);

app.get('/api/recent', (request, response) => {
  // Get documents and perform callback on recentQuestions data
  Questions.find({}, (error, recentQuestions) => {
    if (error) {
      response.send('unable to retrieve data')
    } else {
      response.json(recentQuestions)
    }
  })
})

// Create another route here to update option.count
app.post('/submitvote/:qid/:oid', (request, response) => {
 let opID = request.params.oid
 let qID = request.params.qid
 // let choiceNum = options.opID.choice.count
 Questions.find(
   { "qid": qID }, (error, document) => {
    console.log(document[0].options[opID].choice.name)
    document[0].options[opID].choice.count.$inc()
    document.save()
  })
  response.end()
})

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

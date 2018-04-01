const path = require('path');
const compression = require('compression')
const mongoose = require('mongoose').set('debug', true);
const express = require('express');

const Questions = require('./src/models/fv-questionsModel')

mongoose.connect('mongodb://localhost/FVDB', err => {
  if (err) {
    console.log(err)
  }
})

const app = express();

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

// Request contains parameters used to update collection
app.get('/submitvote/:qid/:oid', (request, response) => {
  let opID = request.params.oid
  let qID = request.params.qid
  Questions.update(
    { qid: qID , 'options.oid': opID},
    { $inc: { 'options.$.choice.count': 1} },
    { new: true },
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    }
  )
  response.end()
})

// Create a POST route for question creation

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

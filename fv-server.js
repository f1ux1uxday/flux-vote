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

// Create another route here to update option.count
app.get('/submitvote/:qid/:oid', (request, response) => {
  let opID = request.params.oid
  let qID = request.params.qid
  // let choiceNum = options.opID.choice.count
  // Questions.findOne(
  //   { "qid": qID, 'options.oid': opID },
  //   // { $inc: { 'options.opID.choice.count': 1}},
  //   (error, result) => {
  //    console.log(result.options[opID].choice.name)
  //    console.log(result.options[opID].choice.count)
  //    // result[0].options[opID].choice.count.increment()
  //    if (error){
  //      console.log(error)
  //    } else {
  //      console.log(result)
  //    }
  //    result.update(
  //      // {qid: qID},
  //      {$inc: {'options.$.choice.count': 1}},
  //      (err, things) => {
  //        if (err) {
  //          console.log(err)
  //        } else {
  //          console.log(things)
  //        }
  //      }
  //    )
     // result[0].options[opID].set(choice.count, 1)
     // result[0].save((err, res) => {
     //   if (err) {
     //     console.log(err)
     //   } else {
     //     console.log(res)
     //   }
     // })
   // })
  Questions.update(
     { qid: qID , 'options.oid': opID},
     { $inc: { 'options.$.choice.count': 1} },
     { new: true },
     (err, thing) => {
       if (err) {
         console.log(err)
       } else {
         console.log(thing)
       }
     }
  )
  response.end()
})

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

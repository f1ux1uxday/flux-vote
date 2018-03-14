const mongoose = require('mongoose')

const questionsSchema = new mongoose.Schema({
  title: String,
  options: [{ oid: Number, choice: { name: String, count: Number } }],
  qid: Number,
})

const QuestionsModel = mongoose.model('Questions', questionsSchema, 'questions')

module.exports = QuestionsModel

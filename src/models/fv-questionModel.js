const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: String,
  options: Array,
  qid: Number,
})

const QModel = mongoose.model('Model', questionSchema, 'questionBank')

module.exports = QModel

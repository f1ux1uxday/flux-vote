const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: Number,
  name: String,
  pass: String,
  createdQs: Array,
})

const UModel = mongoose.model('userBank', userSchema)

module.exports = UModel

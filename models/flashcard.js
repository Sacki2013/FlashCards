const mongoose = require('mongoose');
const config = require('../config/database');

const FlashCardSchema = mongoose.Schema({
  question: { type: String },
  answer: { type: String },
  box: { type: Number }
});

const FlashCard = module.exports = mongoose.model('FlashCard', FlashCardSchema);

const FlashCardsSchema = mongoose.Schema({
  name: { type: String, required: true },
  questionSet: { type: [FlashCardSchema] }
});

const FlashCards = module.exports = mongoose.model('FlashCards', FlashCardsSchema);

module.exports.getSets = function(callback) {
  FlashCards.find(callback);
}

module.exports.addSet = function(newSet, callback) {
  newSet.save(callback);
}

module.exports.addQuestions = function(id, questions, callback) {
  FlashCards.findByIdAndUpdate = function(id, updSet) {

  }
}

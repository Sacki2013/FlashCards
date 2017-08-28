const express = require('express');
const router = express.Router();
const FlashCards = require('../models/flashcard');
const FlashCard = require('../models/flashcard');

router.post('/addquestionSet', (req, res, next) => {
  let newSet = new FlashCards({
    name: req.body.name,
    questionsSet: []
  });

  let questions = req.body.questions;
  for (let i = 0; i < questions.length; i++) {
    newSet.questionSet.push(questions[i]);
  }

  FlashCards.addSet(newSet, (err, questionSet) => {
    if (err) throw err;
    if (questionSet) {
      res.send(questionSet);
    }
  });
});

router.post('/addQuestions/:id', (req, res, next) => {
  let questions = req.body.questions;
  let id = req.params.id;

  FlashCards.addQuestions(id, questions, (err, set) => {
    if (err) throw err;
    if (set) {
      res.send(set);
    }
  });
});

router.get('/questionSets', (req, res, next) => {
  FlashCards.getSets((err, questionSets) => {
    res.send(questionSets);
  });
});

module.exports = router;
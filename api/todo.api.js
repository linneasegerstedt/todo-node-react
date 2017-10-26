const express = require('express');

const router = express.Router();
const Todo = require('../models/todo');

/* ------ GET /users listing. ------ */
router.get('/', (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) return next(err);
    res.json(todos);
  });
});

router.post('/', (req, res, next) => {
  Todo.create(req.body, (err, todo) => {
    if (err) return next(err);
    res.json(todo);
  });
});

router.patch('/:todo_id', (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.todo_id, req.body, 
    {new: true}, (err, todo) => {
    if (err) return next(err);
    res.json(todo);
  });
});

router.delete('/:todo_id', (req, res, next) => {
  Todo.findByIdAndRemove(req.params.todo_id, 
    (err, todo) => {
    if (err) return next(err);
    res.json(todo);
  });
});

router.get('/:todo_id', (req, res, next) => {
  Todo.findById(req.params.todo_id, 
    (err, todo) => {
    if (err) return next(err);
    res.json(todo);
  });
});

module.exports = router;
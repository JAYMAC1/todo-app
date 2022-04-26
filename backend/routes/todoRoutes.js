const express = require('express') // import express (common js syntax)
const router = express.Router() // initiate express Router as router variable
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../contollers/todoController')

router.route('/').get(getTodos).post(addTodo) // use contoller function for GET and POST methods
router.route('/:id').put(updateTodo).delete(deleteTodo) // use contoller function for PUT  and DELETE methods

module.exports = router // export router

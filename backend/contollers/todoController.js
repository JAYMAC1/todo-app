const asyncHandler = require('express-async-handler') // import async handler
const Todo = require('../models/todoModel') // import todo Model

// @desc    controller to fetch todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find()

  res.status(200).json(todos) // fetch todos
})

// @desc    controller to create todo
// @route   POST /api/todos
// @access  Private
const addTodo = asyncHandler(async (req, res) => {
  if (!req.body.description) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const todo = await Todo.create({
    description: req.body.description,
  })
  res.status(200).json({ message: 'POST todos from controller' }) // add todos
})

// @desc    controller to fetch todos
// @route   PUT /api/todos
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `PUT updates todo ${req.params.id} from controller` }) //update todos
})

// @desc    controller to fetch todos
// @route   DELETE /api/todos
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `DELETE todo ${req.params.id} from controller` }) // delete todos
})

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
}

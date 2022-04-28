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
  res.status(200).json(todo) // add todos
})

// @desc    controller to fetch todos
// @route   PUT /api/todos
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTodo) //update todos
})

// @desc    controller to fetch todos
// @route   DELETE /api/todos
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }
  await todo.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
}

const asyncHandler = require('express-async-handler') //

// @desc    controller to fetch todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'GET todos from controller' }) // fetch todos
})

// @desc    controller to create todo
// @route   POST /api/todos
// @access  Private
const addTodo = asyncHandler(async (req, res) => {
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

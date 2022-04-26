const express = require('express') // import express (common js syntax)

const router = express.Router() // initiate express Router as router variable

router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET todos from routes' }) // fetch todos
})
router.post('/', (req, res) => {
  res.status(200).json({ message: 'POST todos from routes' }) // add todos
})
router.put('/', (req, res) => {
  res.status(200).json({ message: 'PUT todos from routes' }) //update todos
})
router.delete('/', (req, res) => {
  res.status(200).json({ message: 'DELETE todos from routes' }) // delete todos
})

module.exports = router // export router

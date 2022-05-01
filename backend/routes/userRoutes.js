const express = require('express') // import express (common js syntax)
const router = express.Router() // initiate express Router as router variable

const {
  registerUser,
  loginUser,
  getUser,
} = require('../contollers/userController')
router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/me', getUser)

module.exports = router

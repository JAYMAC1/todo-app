const express = require('express') // import express (common js syntax)
const router = express.Router() // initiate express Router as router variable

const {
  registerUser,
  loginUser,
  getUser,
} = require('../contollers/userController')

const { protect } = require('../middleware/authMiddleware') //import the protect function from authMiddleware

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/me', protect, getUser)

module.exports = router

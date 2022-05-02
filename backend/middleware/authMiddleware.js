const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1] // get token from header
      const decoded = jwt.verify(token, process.env.JWT_SECRET) // verify token
      req.user = await User.findById(decoded.id)
        .select('-password')
        .select('-isAdmin') // Get user from the token
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('NOT AUTHORISED!')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('NOT AUTHORISED, no token')
  }
})

module.exports = { protect }

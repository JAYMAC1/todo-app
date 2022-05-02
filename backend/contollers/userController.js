const asyncHandler = require('express-async-handler') // import async handler
const jwt = require('jsonwebtoken') // import jsonwebtoken as jwt
const bcrypt = require('bcryptjs') // import bcryptjs as bcrypt
const User = require('../models/userModel') // import user Model

// @desc    controller create user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // destructure body data
  const { name, email, password } = req.body

  // Check all required data is passed
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check is user email already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('Email already registered')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin: false,
  })

  // Confirm User is created in DB
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenicate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body // destructure data sent in the body

  const user = await User.findOne({ email }) // Check if user exisits
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('invalid Credentials')
  }
})

// @desc    Authenicate a user
// @route   POST /api/users/login
// @access  private
const getUser = asyncHandler(async (req, res) => {
  // const { _id, name, email } = await User.findById(req.user.id)
  res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
}

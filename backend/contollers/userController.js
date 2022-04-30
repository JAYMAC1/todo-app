const asyncHandler = require('express-async-handler') // import async handler
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

  // Create User
  const user = await User.create({
    name,
    email,
    password, //: hashedPassword,
    isAdmin: false,
  })

  // Confirm User is created in DB
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

module.exports = {
  registerUser,
  // loginUser,
  // getMe,
}

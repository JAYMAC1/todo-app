// Define Schema for user collection
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please ensure the username is entered'],
    },
    email: {
      type: String,
      required: [true, 'Please ensure unique email add is entered'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please ensure password'],
    },
    isAdmin: {
      type: String,
      Default: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)

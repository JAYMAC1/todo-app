const mongoose = require('mongoose') // Import mongoose package

// create mongoose Schema (todoSchema)
const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // field name
    description: {
      type: String, // feild type
      required: [true, 'Ensure a description has a value'],
    },
  },
  {
    timestamps: true, // creates CreatedAt and Modified timestamp fields
  }
)
module.exports = mongoose.model('Todo', todoSchema) // Export 'Todo' model using todoSchema

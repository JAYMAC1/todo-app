const mongoose = require('mongoose') // import mongoose package

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB

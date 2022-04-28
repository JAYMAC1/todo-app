const express = require('express') // import express package
const dotenv = require('dotenv').config() // allows to read data from .env file
const { errorHandler } = require('./middleware/errorMiddleware') // import customer error handling middleware

const connectDB = require('./config/db') // import mongoose db connection
const PORT = process.env.PORT || 5000 // specify port for the backend to list on pulled from .env
connectDB() // Initiate mongoose connection to MongoDB

const app = express() // initiate express application on app

app.use(express.json()) // parse body where JSON
app.use(express.urlencoded({ extended: false })) // parse body where urlEncoded

app.use('/api/todos', require('./routes/todoRoutes')) // direct /api/todos to todoRoutes router
app.use(errorHandler) // set express application to use custom error handling middleware

app.listen(PORT, () => {
  console.log(`server started om port: ${PORT}`) // set app to listen on specified port
})

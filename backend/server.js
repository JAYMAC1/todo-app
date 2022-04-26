const express = require('express') // import express package
const dotenv = require('dotenv').config() // allows to read data from .env file

const PORT = process.env.PORT || 5000 // specify port for the backend to list on pulled from .env

const app = express() // initiate express application on app

app.use('/api/todos', require('./routes/todoRoutes')) // direct /api/todos to todoRoutes router

app.listen(PORT, () => {
  console.log(`server started om port: ${PORT}`) // set app to listen on specified port
})

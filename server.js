//All Dependencies
const express  = require('express');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (request, response) => {
  response.send('Welcome to the Hello World! API')
})

//Dynamic ROUTES
// Languages: 
const languagesController = require('./controllers/languagesController.js')
app.use('/languages', languagesController)



// LISTEN
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

app.listen(process.env.PORT, () => {
  console.log('Greetings! From port: ', process.env.PORT);
})
const mongoose = require('mongoose')


const connectionURL = process.env.connectionURL || require('../config.js').connectionURL


//const connectionURL = 'mongodb+srv://admin:admin@cluster0-crkxo.mongodb.net/clase?retryWrites=true&w=majority'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})

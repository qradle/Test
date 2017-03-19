const express = require('express')

const cookie_parser = require('cookie-parser')
const body_parser = require('body-parser')
const morgan = require('morgan')

var router = require('./router')

var app = express()
app.use(morgan('combined'))
app.use(cookie_parser())
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))

app.use('/api', router)
app.get('*', (req,res) => {
  res.send('404')
})

module.exports = app

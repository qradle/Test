const express = require('express')
const cookie_parser = require('cookie-parser')
const body_parser = require('body-parser')
const morgan = require('morgan')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const wpconfig = require('../webpack.config')

const router = require('./router')

var app = express()
app.use(morgan('combined'))
app.use(cookie_parser())
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))

app.use('/static', express.static('static'))

var compiler = webpack(wpconfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: wpconfig.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

app.use('/api', router)
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.get('*', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>Employees && Departments</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" >
      </head>
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" ></script>
        <div id="appcontainer"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>`
  )
})

module.exports = app

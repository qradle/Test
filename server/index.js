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

app.use('/static', express.static('static'));

var compiler = webpack(wpconfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: wpconfig.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

app.use('/api', router)
app.get('*', (req, res) => {
    res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>Users Departments</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      </head>
      <body>
        <div id="appcontainer"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>`
  )
})

module.exports = app

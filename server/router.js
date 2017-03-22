var router = require('express').Router()
const generateCrud = require('./utils').generateCrud
const api = require('./api')

Object.keys(api).forEach( key => generateCrud(api[key], router))

module.exports = router

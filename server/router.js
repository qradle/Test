const router = require('express').Router()
var generateCrud = require('./utils').generateCrud
var api = require('./api')

Object.keys(api).forEach( key => generateCrud(api[key], router));

module.exports = router

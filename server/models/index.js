var fs = require('fs')
var Sequelize = require('sequelize')

var db_settings  = require('../../config').DB_SETTINGS

var sequelize = new Sequelize(
  db_settings.database,
  db_settings.username,
  db_settings.password,
  {
    host: db_settings.host,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
)

var db = {}
fs.readdirSync('./server/models/')
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(file)
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

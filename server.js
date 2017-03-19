var server = require('./server/index')
var models = require('./server/models')
var config = require('./config')

models.sequelize.sync().then(() => {
  console.log('models initialized');
  server.listen(config.PORT, function () {
    console.log(`Example app listening on port ${config.PORT}`);
  });
})

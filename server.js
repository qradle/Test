const server = require('./server/index')
const models = require('./server/models')
const config = require('./config')

models.sequelize.sync().then(() => {
  console.log('models initialized');
  server.listen(config.PORT, function () {
    console.log(`Example app listening on port ${config.PORT}`);
  });
})

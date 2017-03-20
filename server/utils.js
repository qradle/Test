const models = require('./models')

var generateCrud = (options, router) => {
  router
    .get(`/${options.url}`, (req, res) => {
      models[options.model].findAll().then( items => {
        res.send(items);
      })
    })
    .get(`/${options.url}/:id`, (req, res) => {
      models[options.model].findById(req.params.id).then( item => {
        res.send(item)
      })
    })
    .post(`/${options.url}`, (req, res) => {
      models[options.model].create(req.body).then( item => {
        res.send(item)
      })
    })
    .put(`/${options.url}/:id`, (req, res) => {
      models[options.model].findById(req.params.id).then( item => {
        item.update(req.body).then(item => res.send(item))
      })
    })
}

module.exports = {
  generateCrud: generateCrud
}

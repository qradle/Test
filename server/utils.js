const models = require('./models')

var generateCrud = (options, router) => {
  router
    .get(`/${options.url}`, (req, res) => {
      models[options.model].findAll().then( items => {
        res.send(items)
      })
    })
    .get(`/${options.url}/:id`, (req, res) => {
      models[options.model].findById(req.params.id).then( item => {
        if (item) {
          res.send(item)
        } else {
          res.status(400).send('bad id')
        }
      })
    })
    .post(`/${options.url}`, (req, res) => {
      models[options.model].create(req.body).then( item => {
        res.send(item)
      })
    })
    .put(`/${options.url}/:id`, (req, res) => {
      models[options.model].findById(req.params.id).then( item => {
        if (item) {
          item.update(req.body).then(item => res.send(item))
        } else {
          res.status(400).send('bad id')
        }
      })
    })
    .delete(`/${options.url}/:id`, (req, res) => {
      models[options.model].findById(req.params.id).then( item => {
        if (item) {
          item.destroy().then(response => res.send(response))
        } else {
          res.status(400).send('bad id')
        }
      })
    })
}

module.exports = {
  generateCrud: generateCrud
}

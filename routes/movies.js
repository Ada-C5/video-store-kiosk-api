let router = require('express').Router()
let Controller = require('../controllers/movies')

router.get('/', function (req, res) {
  Controller.getAll(req.query, res.apiRespond)
})

router.get('/title/:title', function (req, res) {
  Controller.getByTitle(req.params.title, res.apiRespond)
})


module.exports = router

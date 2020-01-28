const { Router } = require('express');

const routes = new Router();

routes.get('/', (req,res) => {
  return res.json({dude: 'the fuck'});
});

module.exports = routes;
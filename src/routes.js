import { Router } from 'express';

const routes = new Router();

routes.get('/', (req,res) => {
  return res.json({dude: 'theeee fuck'});
});

export default routes;
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/images/baidu', controller.images.baidu.index);
  router.get('/api/tuling', controller.tuling.index.index);
  router.get('/api/snh48g/tickets', controller.snh48g.tickets.index);
  router.get('/api/bilibili/covers', controller.bilibili.covers.index);
};

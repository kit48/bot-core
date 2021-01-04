import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/images/baidu', controller.images.baidu.index);
  router.get('/api/tuling', controller.tuling.index.index);
};

import ads from './controllers/ads';
import route from 'koa-route';

export default (app) => {
  app.use(route.get('/api/ads', ads.list));
  app.use(route.post('/api/ads', ads.add));
  app.use(route.get('/api/ads/clear', ads.clear));
}

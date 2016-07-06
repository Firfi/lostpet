import ads from './controllers/ads';
import route from 'koa-route';
import convert from 'koa-convert'

export default (app) => {
  app.use(route.get('/api/ads', ads.list));
  app.use(route.post('/api/ads', ads.add));
  app.use(route.get('/api/ads/clear', ads.clear));
}

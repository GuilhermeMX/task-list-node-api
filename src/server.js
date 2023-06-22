import http from 'node:http'

import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// const app = express();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res)

  // Testando se o regex bate com a url da requisição
  const route = routes.find(route => {
    return route.method == method && route.path.test(url); 
  })

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
})

import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { redis } from './constants';
import { problems, answers } from './data/problems';
import { modelCreator } from './model/modelCreator';
import { modelRunner } from './model/modelRunner';
const jsonParser = bodyParser.json();

const app = express();
console.log('app started');
app.use(cors());
app.get('/', (req, resp) => {
  console.log('route is /');
  const index = Math.floor(Math.random() * problems.length - 1);
  resp.send({ problem: problems[index], solution: answers[index] });
});

app.post('/entry', jsonParser, async (req, resp) => {
  console.log('route is /entry');
  await redis.sadd('entries', JSON.stringify(req.body));
  resp.send({ status: 'ok' });
});

app.post(
  '/find',
  jsonParser,
  async (req, resp, next) => {
    console.log('route is /find');
    //@ts-ignore
    req.rfmodel = await redis.get('rFClassifier');
    next();
  },
  modelRunner,
);

app.get('/generate', modelCreator, async (req, resp) => {
  //@ts-ignore
  await redis.set('rFClassifier', JSON.stringify(req.rfmodel));
  console.log('update to classifier complete');
  resp.send({ status: 'ok' });
});

app.listen(80);
export default app;

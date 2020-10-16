import bodyParser from "body-parser";
import express from 'express'
import cors from 'cors'
import { redis } from './constants';
import { problems, answers } from './data/problems';
import { modelCreator } from "./model/modelCreator";
import { modelRunner } from "./model/modelRunner";
const jsonParser = bodyParser.json()

const app = express()
app.use(cors())
app.get('/', (req, resp) => {
  const index = Math.floor(Math.random() * problems.length - 1);
  resp.send({ problem: problems[index], solution: answers[index] });
});
app.post('/entry', jsonParser, async (req, resp) => {
  await redis.sadd('entries', JSON.stringify(req.body))
  resp.send({ status: 'ok' })
});

app.post('/find', jsonParser, modelCreator, modelRunner);

app.listen(80);
export default app;
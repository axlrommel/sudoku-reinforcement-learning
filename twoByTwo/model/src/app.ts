import bodyParser from "body-parser";
import express from 'express'
import cors from 'cors'
import { problems, answers } from './data/problems';
const jsonParser = bodyParser.json()

const app = express()
app.use(cors())
app.get('/', (req, resp) => {
  const index = Math.floor(Math.random() * problems.length - 1);
  resp.send({ problem: problems[index], solution: answers[index] });
});
app.listen(80);
export default app;
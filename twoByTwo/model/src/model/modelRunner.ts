import { dropLast } from "ramda";
import { buildObservationFromEntry } from "./transformations";
import { Entry, Observation } from "./types";
import { RandomForestClassifier as RFClassifier } from 'ml-random-forest';

export const modelRunner = async (req: any, resp: any) => {
  const rfclassifier: RFClassifier = RFClassifier.load(JSON.parse(req.rfmodel))
  const data: any = req.body;
  const entry: Entry = ({
    board: data.board,
    tileValue: {
      row: data.row,
      col: data.col,
      value: 0
    }
  });
  const observation: Observation = buildObservationFromEntry(entry);
  const val: number[][] = [Object.values(observation)]
  const testSet = val.map((o: number[]) => dropLast(1, o));
  const rfresult = rfclassifier.predict(testSet);
  resp.send({ rfresult });
}
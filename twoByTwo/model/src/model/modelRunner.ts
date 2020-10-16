import { dropLast } from "ramda";
import { buildObservationFromEntry } from "./transformations";
import { Entry, Observation } from "./types";

export const modelRunner = async (req, resp) => {
  const dtclassifier: any = req.dtmodel
  const rfclassifier: any = req.rfmodel
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
  const dtresult = dtclassifier.predict(testSet);
  const rfresult = rfclassifier.predict(testSet);
  resp.send({ dtresult, rfresult });
}
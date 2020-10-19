import { redis } from "../constants";
import { getRFClassifier } from "./classifier";
import { buildObservationFromEntry, duplicateBySwitchingRowsAndCols, fromStringToObjects } from "./transformations";
import { Entry, Observation } from "./types";

export const modelCreator = async (req: any, resp: any, next: any) => {
  console.log('creating model')
  const stringEntries = await redis.smembers('entries');
  const entries: Entry[] = stringEntries.map((s: string) => fromStringToObjects(s));
  const trueObservations: Observation[] = entries.map(
    (e: Entry) => buildObservationFromEntry(e))
  const addedObservations: Observation[] = trueObservations.map(
    (o: Observation) => duplicateBySwitchingRowsAndCols(o))
  const trueRows: any = trueObservations.map((o: Observation) =>
    Object.values(o)
  );
  const addedRows: any = addedObservations.map((o: Observation) =>
    Object.values(o)
  );
  const allRows = trueRows.concat(addedRows);
  const rFClassifier = getRFClassifier(allRows);
  req.rfmodel = rFClassifier;
  next();
}
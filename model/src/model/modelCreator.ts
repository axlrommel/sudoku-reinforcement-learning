import { redis } from '../constants';
import { getRFClassifier } from './classifier';
import { buildObservationFromEntry, fromStringToObjects } from './transformations';
import { Entry, Observation } from './types';

export const modelCreator = async (req: any, resp: any, next: any) => {
  console.log('creating model');
  const stringEntries = await redis.smembers('entries');
  const entries: Entry[] = stringEntries.map((s: string) => fromStringToObjects(s));
  const observations: Observation[] = entries.map((e: Entry) => buildObservationFromEntry(e));
  const rows: any = observations.map((o: Observation) => Object.values(o));
  const rFClassifier = getRFClassifier(rows);
  req.rfmodel = rFClassifier;
  next();
};

import { RandomForestClassifier as RFClassifier } from 'ml-random-forest';
import { dropLast, takeLast } from 'ramda';

const classifierRFoptions = {
  seed: 3,
  maxFeatures: 0.8,
  replacement: true,
  nEstimators: 25,
};

export const getRFClassifier = (data: number[][]): any => {
  const trainingSet = data.map((o: number[]) => dropLast(1, o));
  const predictions = data.map((o: number[]) => takeLast(1, o));

  const classifier = new RFClassifier(classifierRFoptions);
  classifier.train(trainingSet, predictions);
  return classifier;
};

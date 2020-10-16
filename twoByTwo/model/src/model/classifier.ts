import { DecisionTreeClassifier as DTClassifier } from 'ml-cart';
import { RandomForestClassifier as RFClassifier } from 'ml-random-forest';
import { dropLast, takeLast } from 'ramda';
import { classifierDTOptions, classifierRFoptions } from './constants';

export const getDTClassifier = (data: number[][]): any => {
  const trainingSet = data.map((o: number[]) => dropLast(1, o))
  const predictions = data.map((o: number[]) => takeLast(1, o))

  const classifier = new DTClassifier(classifierDTOptions);
  classifier.train(trainingSet, predictions);
  return classifier;
}

export const getRFClassifier = (data: number[][]): any => {
  const trainingSet = data.map((o: number[]) => dropLast(1, o))
  const predictions = data.map((o: number[]) => takeLast(1, o))

  const classifier = new RFClassifier(classifierRFoptions);
  classifier.train(trainingSet, predictions);
  return classifier;
}
import { AppBreakdown, Data } from './types';

const cogInsights: Data[] = [
  { xAxisValue: 1, yAxisValue: 1 },
  { xAxisValue: 2, yAxisValue: 0.6 },
  { xAxisValue: 3, yAxisValue: 0.8 },
  { xAxisValue: 4, yAxisValue: 0.7 },
  { xAxisValue: 5, yAxisValue: 0.6 },
];

const cogInsightX = (d: Data) => d.xAxisValue;
const cogInsightY = (d: Data) => d.yAxisValue;

const appBreakdownData: AppBreakdown[] = [
  { xAxisValue: 1, yAxisValue1: 23, yAxisValue2: 33 },
  { xAxisValue: 2, yAxisValue1: 34, yAxisValue2: 44 },
  { xAxisValue: 3, yAxisValue1: 44, yAxisValue2: 54 },
  { xAxisValue: 4, yAxisValue1: 54, yAxisValue2: 64 },
  { xAxisValue: 5, yAxisValue1: 64, yAxisValue2: 74 },
];

const appBreakdownX = (d: AppBreakdown) => d.xAxisValue;

const appBreakdownY = [
  (d: AppBreakdown) => d.yAxisValue1,
  (d: AppBreakdown) => d.yAxisValue2,
];

const colours: string[] = [
  '#A7B1FF',
  '#FFF1F0',
  '#FFB05C',
  '#4F5795',
  '#78D7FF',
  '#156ACD',
];

const aggregateBreakdown: number[] = [12, 19, 10, 13, 24, 23];

const value = (d: number) => d;

export {
  cogInsights,
  appBreakdownData,
  aggregateBreakdown,
  appBreakdownX,
  appBreakdownY,
  cogInsightX,
  cogInsightY,
  value,
  colours,
};

import { Data } from "./types";

const data1: Data[] = [
  { xAxisValue: 1, yAxisValue: 23 },
  { xAxisValue: 2, yAxisValue: 14 },
  { xAxisValue: 3, yAxisValue: 44 },
  { xAxisValue: 4, yAxisValue: 24 },
  { xAxisValue: 5, yAxisValue: 64 },
];

const data2: number[] = [30, 40, 50];

const x = (d: Data) => d.xAxisValue;
const y = (d: Data) => d.yAxisValue;

const value = (d: number) => d;

export { data1, data2, x, y, value };
export type Data = {
  xAxisValue: number,
  yAxisValue: number,
};

export type AggregateBreakdownProps = {
  data: number[]
}

export type CognitiveInsightsProps = {
  data: Data[],
  x: (data: Data) => number,
  y: (data: Data) => number
}

export type AppBreakdown = {
  xAxisValue: number,
  yAxisValue1: number,
  yAxisValue2: number,
}

export type AppBreakdownProps = {
  data: AppBreakdown[],
  x: (data: AppBreakdown) => number,
  y: (d: AppBreakdown) => number
}

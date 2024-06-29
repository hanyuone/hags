export type Data = {
  xAxisValue: number,
  yAxisValue: number,
};

export type GraphProps = {
  data: Data[],
  x: (data: Data) => number,
  y: (data: Data) => number
}

export type AggregateBreakdownProps = {
  data: number[]
}
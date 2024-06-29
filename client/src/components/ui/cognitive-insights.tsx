import { VisXYContainer, VisArea, VisAxis } from '@unovis/react'
import { GraphProps } from '../../lib/types';

const CognitiveInsights = ({ data, x, y }: GraphProps) => {
  return (
    <VisXYContainer data={data}>
      <VisArea x={x} y={y} />
      <VisAxis type='x' />
      <VisAxis type='y' />
    </VisXYContainer>
  );
};

export default CognitiveInsights;


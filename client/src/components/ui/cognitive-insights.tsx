import { VisXYContainer, VisArea, VisAxis } from '@unovis/react'
import { CognitiveInsightsProps } from '../../lib/types';

const CognitiveInsights = ({ data, x, y }: CognitiveInsightsProps) => {
  return (
    <VisXYContainer data={data}>
      <VisArea x={x} y={y} />
      <VisAxis type='y' />
    </VisXYContainer>
  );
};

export default CognitiveInsights;


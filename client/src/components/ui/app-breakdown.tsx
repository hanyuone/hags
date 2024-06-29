import { VisXYContainer, VisGroupedBar, VisAxis } from '@unovis/react';
import { GraphProps } from '../../lib/types';

const AppBreakdown = ({ data, x, y }: GraphProps) => {
  return (
    <VisXYContainer data={data}>
      <VisGroupedBar x={x} y={y} />
      <VisAxis type='x' />
      <VisAxis type='y' />
    </VisXYContainer>
  );
};

export default AppBreakdown;

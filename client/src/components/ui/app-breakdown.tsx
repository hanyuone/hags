import { VisXYContainer, VisAxis, VisStackedBar } from '@unovis/react';
import { GraphProps } from '../../lib/types';
import { colours } from "../../lib/data";

const AppBreakdown = ({ data, x, y }: GraphProps) => {
  return (
    <VisXYContainer data={data}>
      <VisStackedBar x={x} y={y} color={colours} />
      <VisAxis type='x' />
      <VisAxis type='y' />
    </VisXYContainer>
  );
};

export default AppBreakdown;

import {
  VisXYContainer,
  VisStackedBar,
  VisBulletLegend,
} from '@unovis/react';
import { colours } from '../../lib/data';
import { AppBreakdownProps } from '../../lib/types';

const parseDay = (d: number) => {
  if (d === 1) {
    return "TikTok";
  } else if (d === 2 || d === 4) {
    return "Instagram";
  }
}

const AppBreakdown = ({ data, x, y }: AppBreakdownProps) => {
  const items = data.slice(0, 2).map((d, i) => ({
    name: `${parseDay(d.xAxisValue)}`,
    color: colours[i],
  }));

  return (
    <div>
      <VisXYContainer data={data}>
        <VisStackedBar x={x} y={y} color={colours} />
      </VisXYContainer>
      <div className='flex items-center justify-center text-center mt-4'>
        <VisBulletLegend items={items} className='text-white' />
      </div>
    </div>
  );
};

export default AppBreakdown;

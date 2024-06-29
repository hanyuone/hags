import { VisSingleContainer, VisDonut, VisTooltip, VisBulletLegend } from "@unovis/react";
import { value } from "../../lib/data";
import { Donut } from '@unovis/ts';
import { colours } from "../../lib/data";
import { AggregateBreakdownProps } from "../../lib/types";

const AggregateBreakdown = ({ data }: AggregateBreakdownProps) => {
  const triggers = { [Donut.selectors.segment]: (d: any) => d.data }; // TODO: this is what is in the docs (clown emoji)
  const items = data.map((d, i) => ({ name: d, color: colours[i] }));

  return (
    <div>
      <VisSingleContainer data={data}>
        <VisDonut arcWidth={0} value={value} />
        <VisTooltip triggers={triggers} />
      </VisSingleContainer>
      <div className='flex items-center justify-center text-center mt-4'>
        <VisBulletLegend items={items} className="text-white" />
      </div>
    </div>
  )
}

export default AggregateBreakdown;

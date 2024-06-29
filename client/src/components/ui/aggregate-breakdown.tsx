import { VisSingleContainer, VisDonut, VisBulletLegend } from "@unovis/react";
import { value } from "../../lib/data";
import { colours } from "../../lib/data";
import { AggregateBreakdownProps } from "../../lib/types";

const parseLabel = (d: number) => {
  if (d === 12) {
    return "Audio (12%)"
  } else if (d === 19) {
    return "High colour contrast (19%)"
  } else if (d === 10) {
    return "Motion (10%)"
  } else if (d === 13) {
    return "Brightness (13%)"
  } else if (d === 24) {
    return "Small font size (24%)"
  } else if (d === 23) {
    return "Colour temperature (23%)"
  }
}

const AggregateBreakdown = ({ data }: AggregateBreakdownProps) => {
  console.log(data);
  const items = data.map((d, i) => ({ name: parseLabel(d), color: colours[i] }));

  return (
    <div>
      <VisSingleContainer data={data}>
        <VisDonut arcWidth={0} value={value} />
      </VisSingleContainer>
      <div className='flex items-center justify-center text-center mt-4'>
        <VisBulletLegend items={items} className="text-white" />
      </div>
    </div>
  )
}

export default AggregateBreakdown;

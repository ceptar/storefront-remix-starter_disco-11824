import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass';
import DiscoLightningFill from '../svgs/DiscoLightningFill';


export function ColorSwatches({ colors }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {colors.map((color, index) => (
        <div>
        <DiscoLightningFill
          key={color.id}
          className={`absolute w-8 h-8 border-2 p-2 rounded-full ${getTailwindColorClass(
            color.name,
          )}`}
          title={color.name}
        />
        <DiscoLightningFill
          key={index}
          className="fill-discogray relative w-8 h-8"

           />
          
    </div>
    )) }
    </div>
  );
}

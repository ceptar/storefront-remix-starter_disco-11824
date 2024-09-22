import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass';
import DiscoLightningFill from '../svgs/DiscoLightningFill';


export function ColorSwatches({ colors }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {colors.map((color, index) => (
        <div key={color.id}>
        <DiscoLightningFill
          
          className={`absolute w-9 h-9 rounded-full border-4 border-discogray ${getTailwindColorClass(
            color.name,
          )}`}
          title={color.name}
        />
        <DiscoLightningFill
          className="fill-discogray relative w-9 h-9 rounded-full"

           />
          
    </div>
    )) }
    </div>
  );
}

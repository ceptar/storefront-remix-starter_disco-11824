import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass';
import DiscoLightningInner from '../svgs/DiscoLightningInner';


export function ColorSwatches({ colors }) {
  return (
    <div className="flex flex-wrap items-center justify-items-center mt-4 ">
      {colors.map((color, index) => (
        <div key={color.id}>
        <div
          
          className={`absolute w-9 h-9 ${getTailwindColorClass(
            color.name,
          )}`}
          title={color.name}
        />
        <DiscoLightningInner
          className="relative fill-discogray w-9 h-9 border-2 border-discogray border-collapse -mr-1"

           />
          
    </div>
    )) }
    </div>
  );
}

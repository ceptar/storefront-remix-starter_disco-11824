import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass';
import DiscoLightningInner from '../svgs/DiscoLightningInner';


export function ColorSwatches({ colors }) {
  return (
    <div className="flex flex-wrap items-center justify-items-center gap-2 mt-4">
      {colors.map((color, index) => (
        <div key={color.id}>
        <div
          
          className={`absolute w-8 h-8 rounded-full  ${getTailwindColorClass(
            color.name,
          )}`}
          title={color.name}
        />
        <DiscoLightningInner
          className="relative fill-discogray w-8 h-8 border-2 border-discogray rounded-full"

           />
          
    </div>
    )) }
    </div>
  );
}

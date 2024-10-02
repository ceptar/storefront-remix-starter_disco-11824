import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass';
import DiscoLightningInner from '../svgs/DiscoLightningInner';
import { ColorSwatchesProps } from '~/providers/interfaces';


export function ColorSwatches({ colors }: ColorSwatchesProps) {
  return (
    <div className="flex flex-wrap items-center justify-items-center mt-4 ">
      {colors.map((color) => (
        <div key={color.id}>
        <div
          
          className={`absolute w-9 h-9 ${getTailwindColorClass(
            color.name,
          )}`}
          title={color.name}
        />
        <DiscoLightningInner
          className="relative fill-discogray w-9 h-9 border-[2px] border-discogray border-collapse  -mr-[2px]"

           />
          
    </div>
    )) }
    </div>
  );
}
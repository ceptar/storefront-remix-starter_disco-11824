import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass';
import DiscoLightningFill from '../svgs/DiscoLightningFill';
export function ColorSwatches({ colors }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {colors.map((color) => (
        <div>
        <DiscoLightningFill
          key={color.id}
          className={`absolute w-8 h-8 border-2 p-2 rounded-full ${getTailwindColorClass(
            color.name,
          )}`}
          title={color.name}
        />
        <DiscoLightningFill
          
          className="fill-discogray relative w-8 h-8"

           />
          
    </div>
    )) }
    </div>
  );
}

export function generateGradient({ colors }) {
  if (colors.length === 0) return '';
  if (colors.length === 1) return colors[0].name;
  
  const firstColor = colors[0].name;
  const lastColor = colors[colors.length - 1].name;
  const middleColors = colors.slice(1, -1).map(color => `${color.name} ${colors.indexOf(color) * (100 / (colors.length - 1))}%`);
  
  return `linear-gradient(45deg, ${firstColor}, ${middleColors.join(', ')}, ${lastColor})`;
};
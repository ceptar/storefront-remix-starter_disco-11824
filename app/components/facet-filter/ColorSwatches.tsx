import { getTailwindColorClass } from '~/components/facet-filter/GetTailwindColorClass'

export function ColorSwatches({ colors }) {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`w-6 h-6 rounded-full ${getTailwindColorClass(color.name)}`}
            title={color.name}
          />
        ))}
      </div>
    );
  }

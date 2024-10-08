import * as React from 'react';
import { Form } from '@remix-run/react';
import { getTailwindColorClass } from './GetTailwindColorClass';

interface FacetValueFiltersProps {
  results: any;
  filterIds: string[];
  updateFilterIds: (newFilterIds: string[]) => void;
}

// Add this CSS class to your global styles or component-specific styles
const noSelectClass = `
  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export function FacetValueFilters({ results, filterIds, updateFilterIds }: FacetValueFiltersProps) {
  const onTagClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    event.preventDefault();
    event.stopPropagation();

    const newFilterIds = filterIds.includes(id)
      ? filterIds.filter((fid) => fid !== id)
      : [...filterIds, id];
    updateFilterIds(newFilterIds);
  };

  const groupedFacets = results.reduce((groups, item) => {
    const facetName = item.facetValue.facet.name;
    if (!groups[facetName]) {
      groups[facetName] = [];
    }
    groups[facetName].push(item);
    return groups;
  }, {});

  return (
    <Form method="get">
      <div style={{ paddingLeft: '16px', paddingRight: '16px', height: '80px', alignContent: 'center', borderBottom: '1px solid #6b7280', }}>
        <h3 style={{
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: '700',
          color: 'white',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Filter
        </h3>
      </div>

      {Object.keys(groupedFacets).map((group) => (
        <div key={group} style={{
          paddingTop: '20px',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '120%',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}>
            {group}
          </h3>
          <div className="no-select" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {groupedFacets[group].map((f) => {
              const isSelected = filterIds.includes(f.facetValue.id);
              const colorClass = group.toLowerCase() === 'colors'
                ? getTailwindColorClass(f.facetValue.name)
                : '';

              return (
                <div
                  key={f.facetValue.id}
                  onClick={(e) => onTagClick(e, f.facetValue.id)}
                  className={`no-select cursor-pointer text-sm rounded-full px-2 py-1 ${isSelected ? 'border border-white text-white' : 'border border-black text-black'} ${group.toLowerCase() === 'colors' ? colorClass : isSelected ? 'bg-black' : 'bg-white'}`}
                >
                  {f.facetValue.name} ({f.count})
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </Form>
  );
}
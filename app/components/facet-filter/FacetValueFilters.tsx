import * as React from 'react';
import { Form } from '@remix-run/react';
import { getTailwindColorClass } from './GetTailwindColorClass';

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

export function FacetValueFilters({ results, filterIds, updateFilterIds }) {
  const onTagClick = (id: string) => {
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
      <div style={{ marginTop: '24px', padding: '8px' }}>
        {Object.keys(groupedFacets).map((group) => (
          <div key={group} style={{ paddingBottom: '24px' }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '8px', 
              fontWeight: 'bold',
              fontSize: '24px',
              textTransform: 'uppercase',
               }}>
              {group}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {groupedFacets[group].map((f) => {
                const isSelected = filterIds.includes(f.facetValue.id);
                const colorClass = group.toLowerCase() === 'colors' 
                  ? getTailwindColorClass(f.facetValue.name)
                  : '';

                return (
                  <div
                    key={f.facetValue.id}
                    onClick={() => onTagClick(f.facetValue.id)}
                    className={`cursor-pointer text-sm rounded-full px-2 py-1 ${
                      isSelected ? 'border border-white text-white' : 'border border-black text-black'
                    } ${group.toLowerCase() === 'colors' ? colorClass : isSelected ? 'bg-black' : 'bg-white'}`}
                  >
                    {f.facetValue.name} ({f.count})
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
}
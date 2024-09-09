import * as React from 'react';
import { Form } from '@remix-run/react';
import { getTailwindColorClass } from './GetTailwindColorClass';

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


// import * as React from 'react';
// import { Form } from '@remix-run/react';

// export function FacetValueFilters({ results, filterIds, updateFilterIds }) {
//   const onTagClick = (id: string) => {
//     const newFilterIds = filterIds.includes(id)
//       ? filterIds.filter((fid) => fid !== id)
//       : [...filterIds, id];
//     updateFilterIds(newFilterIds);
//   };

//   // Group the results by facet name
//   const groupedFacets = results.reduce((groups, item) => {
//     const facetName = item.facetValue.facet.name;
//     if (!groups[facetName]) {
//       groups[facetName] = [];
//     }
//     groups[facetName].push(item);
//     return groups;
//   }, {});

//   return (
//     <Form method="get">
//       <div style={{ marginTop: '24px', padding: '8px' }}>
//         {Object.keys(groupedFacets).map((group) => (
//           <div key={group} style={{ paddingBottom: '24px' }}>
//             <h3>{group}</h3>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
//               {groupedFacets[group].map((f) => (
//                 <div
//                   key={f.facetValue.id}
//                   onClick={() => onTagClick(f.facetValue.id)}
//                   style={{
//                     cursor: 'pointer',
//                     border: filterIds.includes(f.facetValue.id) ? '1px solid white' : '1px solid black',
//                     borderRadius: '50px',
//                     padding: '2px 6px',
//                     backgroundColor: filterIds.includes(f.facetValue.id) ? 'black' : 'white',
//                     color: filterIds.includes(f.facetValue.id) ? 'white' : 'black',
//                   }}
//                 >
//                   {f.facetValue.name} ({f.count})
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </Form>
//   );
// }

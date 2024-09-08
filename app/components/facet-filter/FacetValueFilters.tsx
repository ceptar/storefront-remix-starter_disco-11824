import * as React from 'react';
import { Form } from '@remix-run/react';

export function FacetValueFilters({ results, filterIds, updateFilterIds }) {
  const onTagClick = (id: string) => {
    const newFilterIds = filterIds.includes(id)
      ? filterIds.filter((fid) => fid !== id)
      : [...filterIds, id];
    updateFilterIds(newFilterIds);
  };

  // Group the results by facet name
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
            <h3>{group}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {groupedFacets[group].map((f) => (
                <div
                  key={f.facetValue.id}
                  onClick={() => onTagClick(f.facetValue.id)}
                  style={{
                    cursor: 'pointer',
                    border: filterIds.includes(f.facetValue.id) ? '1px solid white' : '1px solid black',
                    borderRadius: '50px',
                    padding: '2px 6px',
                    backgroundColor: filterIds.includes(f.facetValue.id) ? 'black' : 'white',
                    color: filterIds.includes(f.facetValue.id) ? 'white' : 'black',
                  }}
                >
                  {f.facetValue.name} ({f.count})
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
}



// import * as React from 'react'

// interface FramerModalProps {
//   menuOpen: boolean;
//   setMenuOpen: (open: boolean) => void;
//   results: any[];
//   filterIds: string[];
//   setFilterIds: (ids: string[]) => void;
// }

// interface FacetValueResult {
//   facetValue: {
//     id: string
//     name: string
//     facet: {
//       id: string
//       name: string
//     }
//   }
//   count: number
// }

// export function FacetValueFilters(FramerModalProps: {
//   results: FacetValueResult[];
//   filterIds: string[];
//   updateFilterIds: (ids: string[]) => void
// }){
//   const { results = [], filterIds, updateFilterIds } = FramerModalProps
//   const [checkedFacets, setCheckedFacets] = React.useState<string[]>([])

//   const onTagClick = (id: string) => {
//     const newCheckedFacets = checkedFacets.includes(id)
//       ? checkedFacets.filter((fid) => fid !== id)
//       : [...checkedFacets, id]
//     setCheckedFacets(newCheckedFacets)
//     updateFilterIds(newCheckedFacets)
//   }

//   // Group the results by facet name
//   const groupedFacets = results.reduce((groups, item) => {
//     const facetName = item.facetValue.facet.name
//     if (!groups[facetName]) {
//       groups[facetName] = []
//     }
//     groups[facetName].push(item)
//     return groups
//   }, {} as { [key: string]: FacetValueResult[] })

//   return (
//     <div style={{ marginTop: '24px', padding: '8px' }}>
//       {results.length > 0 ? (
//         Object.keys(groupedFacets).map((group) => (
//           <div key={group} style={{ paddingBottom: '24px'}}>
//             <h3 style={{ marginLeft: '6px', marginBottom: '24px', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.3em', fontWeight: 'bolder' }}>{group}</h3>{' '}
//             {/* Group heading */}
//             <div
//               style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 gap: '4px',
//               }}
//             >
//               {groupedFacets[group].map((f) => (
//                 <div
//                   key={f.facetValue.id}
//                   onClick={() => onTagClick(f.facetValue.id)}
//                   style={{
//                     cursor: 'pointer',
//             border: checkedFacets.includes(f.facetValue.id)
//                 ? '1px solid white'
//           : '1px solid black',
//                     borderRadius: '50px',
//                     padding: '2px 6px',
//                     backgroundColor: checkedFacets.includes(f.facetValue.id)
//                       ? 'black'
//                       : 'white',
//                     color: checkedFacets.includes(f.facetValue.id)
//                       ? 'white'
//                       : 'black',
//                     fontWeight: checkedFacets.includes(f.facetValue.id)
//                       ? '300'
//                       : '300',
//                     transition: 'all 0.2s ease',
//                   }}
//                 >
//                   {f.facetValue.name} ({f.count})
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No facets available</p>
//       )}
//     </div>
//   )
// }

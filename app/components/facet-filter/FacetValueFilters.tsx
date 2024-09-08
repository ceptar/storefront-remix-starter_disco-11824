import * as React from 'react';

interface FacetValueResult {
  facetValue: {
    id: string;
    name: string;
    facet: {
      id: string;
      name: string;
    };
  };
  count: number;
}

export function FacetValueFilters(props: {
  results: FacetValueResult[];
  filterIds: string[];
  updateFilterIds: (ids: string[]) => void;
}) {
  const { results, filterIds, updateFilterIds } = props;

  const [checkedFacets, setCheckedFacets] = React.useState<string[]>([]);

  const onChange = (id: string) => {
    const newCheckedFacets = checkedFacets.includes(id)
      ? checkedFacets.filter((fid) => fid !== id)
      : [...checkedFacets, id];
    setCheckedFacets(newCheckedFacets);
    updateFilterIds(newCheckedFacets);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '10px',
      }}
    >
      {results.map((f) => (
        <label
          key={f.facetValue.id}
          style={{
            border: '1px solid #bbb',
            borderRadius: '4px',
            padding: '3px 2px',
          }}
        >
          <input
            type="checkbox"
            value={f.facetValue.id}
            checked={checkedFacets.includes(f.facetValue.id)}
            onChange={() => onChange(f.facetValue.id)}
          />
          {f.facetValue.facet.name}: {f.facetValue.name} ({f.count})
        </label>
      ))}
    </div>
  );
}
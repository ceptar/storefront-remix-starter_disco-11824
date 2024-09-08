import React from 'react';

interface ColorLabelProps {
  value: string;
}

export const getColorClass = (value: string): string => {
  // Replace spaces with hyphens and convert to lowercase
  const sanitizedLabelText = value.replace(/\s+/g, '-').toLowerCase();
  return `border-${sanitizedLabelText}`;
};

export const ColorLabel: React.FC<ColorLabelProps> = ({ value }) => {
  const colorClass = getColorClass(value);

  return (
    <span className={colorClass}>
      {value}
    </span>
  );
};
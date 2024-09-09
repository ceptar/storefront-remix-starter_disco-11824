export function getTailwindColorClass(color: string): string {
    const validColors = [
      'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime',
      'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple',
      'fuchsia', 'pink', 'rose'
    ];
  
    const normalizedColor = color.toLowerCase();
    if (validColors.includes(normalizedColor)) {
      return `bg-${normalizedColor}-500`;
    }
    return 'bg-gray-200'; // Default color if not found
  }
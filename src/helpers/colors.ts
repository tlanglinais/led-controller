export const darken = color => {
  const colorValues = color.split('-');
  colorValues[colorValues.length - 1] =
    Number(colorValues[colorValues.length - 1]) + 100;
  return colorValues.join('-');
};

export const evaluatePriorityColor = priority => {
  switch (priority) {
    case 1:
      return 'text-red-500';
    case 2:
      return 'text-yellow-200';
    case 3:
      return 'text-green-300';
    default:
      return 'text-gray-300';
  }
};

export const initialItems = new Array(30000000).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 29999999,
  };
});

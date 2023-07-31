export function getPagesArray(page: number, totalPages: number) {
  const isFirstHalf = page < 3;

  const startSlice = isFirstHalf ? 0 : page - 3;
  const endSlice = isFirstHalf ? 7 : page + 4;

  return Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    startSlice,
    endSlice
  );
}

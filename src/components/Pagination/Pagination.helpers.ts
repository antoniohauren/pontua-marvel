export function getPagesArray(
  page: number,
  totalPages: number,
  isMobile = false,
  isLoading = false
) {
  const q = isMobile ? 1 : 3;
  const w = isMobile ? 3 : 7;
  const e = isMobile ? 2 : 4;
  const r = isMobile ? 1 : 3;

  const isFirstHalf = page < r;

  const startSlice = isFirstHalf ? 0 : page - q;
  const endSlice = isFirstHalf ? w : page + e;

  if (isLoading) {
    return Array(isMobile ? 3 : 7).fill("-");
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    startSlice,
    endSlice
  );
}

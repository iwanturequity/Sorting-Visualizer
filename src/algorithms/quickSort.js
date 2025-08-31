// Placeholder for Quick Sort visualization steps
export function quickSort(array) {
  const animations = [];
  const arr = array.slice();
  function quickSortHelper(start, end) {
    if (start >= end) return;
    let pivot = arr[end];
    let i = start;
    for (let j = start; j < end; j++) {
      animations.push({ type: 'compare', indices: [j, end] });
      if (arr[j] < pivot) {
        animations.push({ type: 'swap', indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    animations.push({ type: 'swap', indices: [i, end] });
    [arr[i], arr[end]] = [arr[end], arr[i]];
    quickSortHelper(start, i - 1);
    quickSortHelper(i + 1, end);
  }
  quickSortHelper(0, arr.length - 1);
  return animations;
}

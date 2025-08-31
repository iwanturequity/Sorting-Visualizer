// Placeholder for Merge Sort visualization steps
export function mergeSort(array) {
  const animations = [];
  const arr = array.slice();
  function mergeSortHelper(start, end) {
    if (end - start <= 1) return;
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(start, mid);
    mergeSortHelper(mid, end);
    let i = start, j = mid, temp = [];
    while (i < mid && j < end) {
      animations.push({ type: 'compare', indices: [i, j] });
      if (arr[i] <= arr[j]) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }
    while (i < mid) temp.push(arr[i++]);
    while (j < end) temp.push(arr[j++]);
    for (let k = 0; k < temp.length; k++) {
      animations.push({ type: 'overwrite', index: start + k, value: temp[k] });
      arr[start + k] = temp[k];
    }
  }
  mergeSortHelper(0, arr.length);
  return animations;
}

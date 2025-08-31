// Placeholder for Insertion Sort visualization steps
export function insertionSort(array) {
  const animations = [];
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      animations.push({ type: 'compare', indices: [j, j - 1] });
      animations.push({ type: 'swap', indices: [j, j - 1] });
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return animations;
}

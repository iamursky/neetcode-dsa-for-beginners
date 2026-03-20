function replaceElements(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let max: number = arr[i + 1];
    let maxIndex: number = i + 1;

    for (let k = i + 2; k < arr.length; k++) {
      if (arr[k] <= max) continue;
      maxIndex = k;
      max = arr[k];
    }

    arr[i] = maxIndex < arr.length ? max : -1;
  }

  return arr;
}

console.log(replaceElements([2, 4, 5, 3, 1, 2])); // Output: [5,5,3,2,2,-1]
console.log(replaceElements([3, 3])); // Output: [3, -1]

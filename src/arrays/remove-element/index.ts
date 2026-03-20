function removeElement(nums: number[], val: number): number {
  let k: number = 0;

  for (const num of nums) {
    if (num === val) continue;
    nums[k] = num;
    k++;
  }

  return k;
}

console.log(removeElement([1, 1, 2, 3, 4], 1)); // Output: nums=[2,3,4], k=3
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: nums=[0,1,3,0,4], k=5

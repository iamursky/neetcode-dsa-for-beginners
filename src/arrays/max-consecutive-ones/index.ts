function findMaxConsecutiveOnes(nums: number[]): number {
  let max: number = 0;
  let current: number = 0;

  for (const num of nums) {
    current = num === 1 ? current + 1 : 0;
    max = Math.max(current, max);
  }

  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2

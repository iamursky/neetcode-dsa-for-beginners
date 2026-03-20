function getConcatenation(nums: number[]) {
  const n = nums.length;
  const ans = new Array(n * 2);

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
}

console.log(getConcatenation([1, 4, 1, 2])); // Output: [1,4,1,2,1,4,1,2]
console.log(getConcatenation([22, 21, 20, 1])); // Output: [22,21,20,1,22,21,20,1]

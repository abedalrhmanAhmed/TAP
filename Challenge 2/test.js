function test_func(nums) {
    const hash = {};
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      const num = nums[i];
      hash[num] = (hash[num] || 0) + 1;
      if (hash[num] > Math.floor(n / 2)) {
        return num;
      }
    }
}
  
console.log(test_func([1,2,3,4,4]))

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((s, n) => s + n, 0);
  }

  toString() {
    return '[' + this.nums.join(',') + ']';
  }
}


class MinStack {
  value: number[] = [];

  push(val: number): void {
    this.value[this.value.length] = val;
  }

  pop(): void {
    const nextValue: number[] = [];

    for (let i = 0; i < this.value.length - 1; i++) {
      nextValue[i] = this.value[i];
    }

    this.value = nextValue;
  }

  top(): number {
    return this.value[this.value.length - 1];
  }

  getMin(): number {
    let min: number = this.value[0];

    for (const val of this.value) {
      min = Math.min(min, val);
    }

    return min;
  }
}

const minStack = new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()); // return 0

minStack.pop();
console.log(minStack.top()); // return 2
console.log(minStack.getMin()); // return 1

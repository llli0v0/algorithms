/**
 * initialize your data structure here.
 */

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    this.minStack.push(x);
    this.minStack.sort((a, b) => a - b);
  }

  pop() {
    let a = this.stack.pop();
    for (let i = 0; i < this.minStack.length; i++) {
      if (this.minStack[i] === a) {
        this.minStack.splice(i, 1);
        break;
      }
    }
    return a;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[0];
  }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
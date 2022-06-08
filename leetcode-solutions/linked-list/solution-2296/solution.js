class Node {
  constructor(val) {
    this.val = val;
    this.pre = null;
    this.next = null;
  }
}

var TextEditor = function() {
  this.head = new Node('head');
  this.currentK = this.head;
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
  for (let i = 0; i < text.length; i++) {
    let node = new Node(text[i]);
    let kNext = this.currentK.next;
    this.currentK.next = node;
    node.pre = this.currentK;
    node.next = kNext;
    if (kNext) kNext.pre = node;
    this.currentK = this.currentK.next;
  }
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
  let result = 0;
  while(k) {
    if (this.currentK === this.head) return result;
    let kNext = this.currentK.next;
    let kPre = this.currentK.pre;
    if (kPre) kPre.next = kNext;
    if (kNext) kNext.pre = kPre;
    this.currentK = kPre;
    result++;
    k--;
  }
  return result;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
  while(k) {
    if (this.currentK.pre) this.currentK = this.currentK.pre;
    k--;
  }
  let result = '';
  let a = 10;
  let cur = this.currentK;
  while(a) {
    if (cur && cur.val !== 'head') result = cur.val + result;
    if (cur.pre) cur = cur.pre;
    a--;
  }
  return result;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  while(k) {
    if (this.currentK.next) this.currentK = this.currentK.next;
    k--;
  }
  let result = '';
  let a = 10;
  let cur = this.currentK;
  while(a) {
    if (cur === this.head) return result;
    if (cur) result = cur.val + result;
    if (cur.pre) cur = cur.pre;
    a--;
  }
  return result;
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

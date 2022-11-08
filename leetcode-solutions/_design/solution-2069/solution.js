/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
  let pos = this.pos = [];
  for (let i = 1; i < width; i++) {
    pos.push([i, 0, 'East']);
  }
  for (let i = 1; i < height; i++) {
    pos.push([width - 1, i, 'North']);
  }
  for (let i = width - 2; i >= 0; i--) {
    pos.push([i, height - 1, 'West']);
  }
  for (let i = height - 2; i >= 0; i--) {
    pos.push([0, i, 'South']);
  }
  this.num = 0;
  this.x = this.y = 0;
  this.dir = 'East';
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
  this.num += num;
  let item = this.pos[(this.num - 1) % this.pos.length];
  let [x, y, dir] = item;
  this.x = x;
  this.y = y;
  this.dir = dir;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
  return [this.x, this.y];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
  return this.dir;
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */

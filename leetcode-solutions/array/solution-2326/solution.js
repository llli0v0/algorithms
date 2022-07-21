/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  let grid = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  let x = 0, y = 0;
  while (head) {
    grid[x][y] = head.val;
    let s = '';
    if (grid[x - 1] && grid[x - 1][y] === -1) s += '1';
    else s += '0';
    if (grid[x + 1] && grid[x + 1][y] === -1) s += '1';
    else s += '0';
    if (grid[x][y - 1] === -1) s += '1';
    else s += '0';
    if (grid[x][y + 1] === -1) s += '1';
    else s += '0';
    if (s === '0101' || s === '0001') y++;
    if (s === '0100' || s === '0110') x++;
    if (s === '0010' || s === '1010') y--;
    if (s === '1000' || s === '1001') x--;
    head = head.next;
  }
  return grid;
};

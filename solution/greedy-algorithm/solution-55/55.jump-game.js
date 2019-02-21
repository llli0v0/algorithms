/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (33.00%)
 * Total Accepted:    10.6K
 * Total Submissions: 32.2K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 从位置 0 到 1 跳 1 步, 然后跳 3 步到达最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let farthest = next = 0;
  if (nums.length < 2) return true;
  for (let i = 0; i < nums.length; i = next) {
    if (nums[i] + i >= nums.length - 1) return true;
    while (nums[i]) {
      if (nums[nums[i] + i] + nums[i] + i > farthest) {
        next = nums[i] + i;
        farthest = nums[nums[i] + i] + nums[i] + i;
        if (farthest > nums.length) return true;
      }
      nums[i] -= 1;
    }
    if (nums[next] === 0) return false;
  }
};

/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 *
 * https://leetcode-cn.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Hard (26.05%)
 * Total Accepted:    629
 * Total Submissions: 2.4K
 * Testcase Example:  '"bcabc"'
 *
 * 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * 
 * 示例 1:
 * 
 * 输入: "bcabc"
 * 输出: "abc"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "cbacdcbc"
 * 输出: "acdb"
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === undefined) counts[s[i]] = 0;
    counts[s[i]] += 1;
  }
  let stack = [];
  let alreadyInStack = {};
  for (let i = 0; i < s.length; i++) {
    while (s[i] < stack[stack.length - 1] && counts[stack[stack.length - 1]] > 0 && !alreadyInStack[s[i]]) {
      alreadyInStack[stack.pop()] = false;
    }
    if (!alreadyInStack[s[i]]) {
      stack.push(s[i]);
      alreadyInStack[s[i]] = true;
    }
    counts[s[i]] -= 1;
  }
  return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));

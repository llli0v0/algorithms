/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let dp = {};
var isScramble = function(s1, s2) {
   if (s1 === s2) return true;
   let key = s1 + ' ' + s2;
   if (dp[key] !== undefined) return dp[key];
   for (let i = 0; i < s1.length - 1; i++) {
     let a = isScramble(s1.slice(0, i + 1), s2.slice(0, i + 1));
     let b = isScramble(s1.slice(i + 1), s2.slice(i + 1));
     let c = isScramble(s1.slice(0, i + 1), s2.slice(s2.length - 1 - i));
     let d = isScramble(s1.slice(i + 1), s2.slice(0, s2.length - 1 - i));
     if (a && b || c && d) return dp[key] = true;
   }
   return dp[key] = false;
 };
 
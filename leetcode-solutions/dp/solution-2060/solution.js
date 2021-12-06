/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function(s1, s2) {
  let dp = {};
  return helper(s1, s2);

  function helper(s1, s2) {
    if (!s1 && !s2) return true;
    else if (s1[0] === '-' || s2[0] === '-') return false;
    let key = `${s1} ${s2}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = false;
    if (/^[a-z]/.test(s1)) {
      if (/^[a-z]/.test(s2)) {
        if (s1[0] === s2[0] && helper(s1.slice(1), s2.slice(1))) {
          return dp[key] = true;
        }
      } else {
        for (let i = 0; i < s2.length; i++) {
          if (/[a-z]/.test(s2[i])) break;
          else {
            let num = parseInt(s2.slice(0, i + 1)) - 1;
            if (helper(s1.slice(1), (num ? String(num) : '') + s2.slice(i + 1))) {
              return dp[key] = true;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < s1.length; i++) {
        if (/[a-z]/.test(s1[i])) break;
        else {
          let num1 = parseInt(s1.slice(0, i + 1));
          if (/^[a-z]/.test(s2)) {
            if (helper((num1 - 1 ? String(num1 - 1) : '') + s1.slice(i + 1), s2.slice(1))) {
              return dp[key] = true;
            }
          } else {
            for (let j = 0; j < s2.length; j++) {
              if (/[a-z]/.test(s2[j])) break;
              else {
                let num2 = s2.slice(0, j + 1);
                if (num2 - num1 >= 0) {
                  if (helper(s1.slice(i + 1), (num2 - num1 ? String(num2 - num1) : '') + s2.slice(j + 1))) {
                    return dp[key] = true;
                  }
                } else {
                  if (helper(String(num1 - num2) + s1.slice(i + 1), s2.slice(j + 1))) {
                    return dp[key] = true;
                  }
                }
              }
            }
          }
        }
      }
    }
    return false;
  }
};

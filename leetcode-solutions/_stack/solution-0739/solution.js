/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
	let result = new Array(T.length).fill(0);
	let stack = [];
	for (let i = 0; i < T.length; i++) {
		while (stack.length && T[i] > stack[stack.length - 1].tem) {
			let t = stack.pop();
			result[t.index] = i - t.index;
		}
		stack.push({ tem: T[i], index: i });
	}
	return result;
};
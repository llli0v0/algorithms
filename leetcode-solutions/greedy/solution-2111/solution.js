/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function(arr, k) {
	let subs = [];
	for (let i = 0; i < arr.length; i++) {
		let mod = i % k;
		if (subs[mod] === undefined) subs[mod] = [];
		subs[mod].push(arr[i]);
	}
	let result = 0;
	for (let i = 0; i < subs.length; i++) {
		let sub = subs[i];
		let inc = [];
		for (let j = 0; j < sub.length; j++) {
			if (!inc.length) inc.push(sub[j]);
			else if (sub[j] < inc[0]) inc[0] = sub[j];
			else if (sub[j] >= inc[inc.length - 1]) inc.push(sub[j]);
			else {
				let l = 0;
				let r = inc.length - 1;
				while (l < r) {
					let m = Math.ceil((l + r) / 2);
					if (sub[j] < inc[m]) {
						r = m - 1;
					} else {
						l = m;
					}
				}
				inc.splice(l + 1, 1, sub[j]);
			}
		}
		result += sub.length - inc.length;
	}
	return result;
};
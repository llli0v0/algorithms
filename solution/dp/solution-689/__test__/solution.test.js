const { solution } = require('../maxSumOfThreeSubarrays');

describe('it should find maximum sum of 3 non overlapping subarrays', () => {
  it('1. should find when k = 2 and length of nums is 6', () => {
    expect(solution([1, 2, 3, 4, 5, 6], 2).toString()).toBe('0,2,4');
  });
  it('2. should find when k = 3 and length of nums is 9', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3).toString()).toBe('0,3,6');
  });
  it('3. should find when k = 2 and length of nums is 7', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7], 2).toString()).toBe('1,3,5');
    expect(solution([7, 6, 5, 4, 3, 2, 1], 2).toString()).toBe('0,2,4');
  });
  it('4. should find when k = 2 and length of nums is 8', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8], 2).toString()).toBe('2,4,6');
    expect(solution([8, 7, 6, 5, 4, 3, 2, 1], 2).toString()).toBe('0,2,4');
  });
  it('5. should find when k = 2 and length of nums is 9', () => {
    expect(solution([3, 2, 1, 8, 6, 4, 9, 5, 7], 2).toString()).toBe('3,5,7');
    expect(solution([3, 9, 1, 8, 6, 4, 2, 5, 7], 2).toString()).toBe('0,3,7');
  });
  it('6. should find when k = 3 and length of nums is 15', () => {
    expect(solution([5, 3, 9, 7, 11, 2, 14, 6, 15, 10, 12, 13, 1, 4, 8], 3).toString()).toBe('2,6,9');
  });
  it('7. should find when k = 3 and length of nums is 10', () => {
    expect(solution([7, 13, 20, 19, 19, 2, 10, 1, 1, 19], 3).toString()).toBe('1,4,7');
  });
});
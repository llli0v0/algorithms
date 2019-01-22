const { solution } = require('../solution');

describe('it should be calculated correctly', () => {
  it('should can compute 2 items', () => {
    expect(solution(' 1 + 2 ')).toBe(3);
    expect(solution(' 2- 1')).toBe(1);
    expect(solution(' 33-11 ')).toBe(22);
  });
  it('should can compute 3 items', () => {
    expect(solution('3 -2 + 2111')).toBe(2112);
    expect(solution(' 9 + 10- 56')).toBe(-37);
  });
  it('should can compute items with bracket', () => {
    expect(solution('( 1 + 2)')).toBe(3);
    expect(solution(' 1 + (2 + 3)')).toBe(6);
    expect(solution('( 1 + 2) + 3')).toBe(6);
    expect(solution(' ( 33+ 44  ) + 10')).toBe(87);
    expect(solution(' 33 + 55 + ( 100 )')).toBe(188);
    expect(solution('11 + 33 + 44 + (100 + 100)')).toBe(288);
    expect(solution('11 + 33 + 44 + (100 + 100) + 100')).toBe(388);
    expect(solution('11 + 33 + 44 + (100 - 100) + 100')).toBe(188);
    expect(solution('11 + 33 + (44 + (100 - 100) + 100)')).toBe(188);
    expect(solution('11 + 33 + (44 - (100 - 100) + 100)')).toBe(188);
    expect(solution('11 + 33 - (44 + (100 - 100) + 100)')).toBe(-100);
    expect(solution('(100 - 100) + ( 90 + (10 + 1- 1))')).toBe(100);
  });
});
const { solution } = require('../solution');

describe('it should can do Prefix and Suffix Search', () => {
  it('should construct trie correctly(non-intersect)', () => {
    let trie = solution(['abc', 'def']);
    let expectTrie = {
      a: {
        word: 'a',
        index: null,
        isCompleteWord: false,
        next: {
          b: {
            word: 'b',
            index: null,
            isCompleteWord: false,
            next: {
              c: {
                word: 'c',
                index: 0,
                isCompleteWord: true,
                next: {}
              }
            }
          }
        }
      },
      d: {
        word: 'd',
        index: null,
        isCompleteWord: false,
        next: {
          e: {
            word: 'e',
            index: null,
            isCompleteWord: false,
            next: {
              f: {
                word: 'f',
                index: 1,
                isCompleteWord: true,
                next: {}
              }
            }
          }
        }
      }
    }
    expect(JSON.stringify(trie)).toBe(JSON.stringify(expectTrie));
  });
  it('should construct trie correctly(intersect)', () => {
    let trie = solution(['abc', 'abd']);
    let expectTrie = {
      a: {
        word: 'a',
        index: null,
        isCompleteWord: false,
        next: {
          b: {
            word: 'b',
            index: null,
            isCompleteWord: false,
            next: {
              c: {
                word: 'c',
                index: 0,
                isCompleteWord: true,
                next: {}
              },
              d: {
                word: 'd',
                index: 1,
                isCompleteWord: true,
                next: {}
              }
            }
          }
        }
      }
    };
    expect(JSON.stringify(trie)).toBe(JSON.stringify(expectTrie));
  });
  it('should find the index conform to the prefix and suffix 1', () => {
    solution(['abciiiidef', 'iiii', 'abcidef', 'qwer', 'ssss', 'abcdef']);
    let result = solution.prototype.f('abc', 'def');
    expect(result).toBe(5);
  });
  it('should find the index conform to the prefix and suffix 2', () => {
    solution(['abciiiidef', 'iiii', 'abcidef', 'qwer', 'ssss', 'abcdef']);
    let result = solution.prototype.f('iiii', 'iiii');
    expect(result).toBe(1);
  });
  it('should find the index conform to the prefix and suffix 3', () => {
    solution(['pop']);
    let result = solution.prototype.f('', '');
    expect(result).toBe(0);
  });
  it('should find the index conform to the prefix and suffix 4', () => {
    solution(['pop']);
    let result = solution.prototype.f('', 'p');
    expect(result).toBe(0);
  });
  it('should find the index conform to the prefix and suffix 5', () => {
    solution(['pop']);
    let result = solution.prototype.f('', 'op');
    expect(result).toBe(0);
  });
  it('should find the index conform to the prefix and suffix 6', () => {
    solution(['pop']);
    let result = solution.prototype.f('pop', 'op');
    expect(result).toBe(0);
  });
  it('should find the index conform to the prefix and suffix 7', () => {
    solution(['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']);
    let result = solution.prototype.f('a', 'a');
    expect(result).toBe(19);
  });
});
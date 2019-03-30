class MagicDictionary {
  constructor() {
    this.hash = {};
  }

  buildDict(dict) {
    for (let i = 0; i < dict.length; i++) {
      this.hash[dict[i]] = true;
    }
  }

  search(word) {
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        let key = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
        let m = word[i].charCodeAt();
        if (this.hash[key] && m !== j) {
          return true;
        }
      }
    }
    return false;
  }
}

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

let ma = new MagicDictionary();
ma.buildDict(["hello","leetcode"]);
ma.search("hhllo");
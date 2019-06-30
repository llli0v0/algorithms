class FileSystem {
  constructor() {
    this.fileSystem = {};
  }

  /** 
   * @param {string} path
   * @return {string[]}
   */
  ls(path, target = this.fileSystem) {
    if (path === '/') return Object.keys(target).sort();
    if (typeof path === 'string') {
      path = path.split('/').filter(i => i !== '');
    }
    if (path.length === 1) {
      if (typeof target[path[0]] === 'string') {
        return [path[0]];
      } else {
        return Object.keys(target[path[0]]).sort();
      }
    }
    return this.ls(path.slice(1), target[path[0]]);
  }

  /** 
   * @param {string} path
   * @return {void}
   */
  mkdir(path, target = this.fileSystem) {
    if (!path.length) return;
    if (typeof path === 'string') {
      path = path.split('/').filter(i => i !== '');
    }
    if (target[path[0]] === undefined) target[path[0]] = {};
    this.mkdir(path.slice(1), target[path[0]]);
  }

  /** 
   * @param {string} filePath 
   * @param {string} content
   * @return {void}
   */
  addContentToFile(filePath, content, target = this.fileSystem) {
    if (typeof filePath === 'string') {
      filePath = filePath.split('/').filter(i => i !== '');
    }
    if (target[filePath[0]] === undefined) {
      if (filePath.length === 1) {
        target[filePath[0]] = '';
      } else {
        target[filePath[0]] = {};
      }
    }
    if (filePath.length === 1) {
      target[filePath[0]] += content;
      return;
    }
    this.addContentToFile(filePath.slice(1), content, target[filePath[0]]);
  }

  /** 
   * @param {string} filePath
   * @return {string}
   */
  readContentFromFile(filePath, target = this.fileSystem) {
    if (typeof filePath === 'string') {
      filePath = filePath.split('/').filter(i => i !== '');
    }
    if (filePath.length === 1) return target[filePath[0]];
    return this.readContentFromFile(filePath.slice(1), target[filePath[0]]);
  }
}

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
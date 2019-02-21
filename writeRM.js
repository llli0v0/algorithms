const fs = require('fs');

for (let i = 1; i <= 1000; i++) {
  let num = '';
  if (i < 10) {
    num = '000' + i;
  } else if (i < 100) {
    num = '00' + i;
  } else if (i < 1000) {
    num = '0' + i;
  } else {
    num = i;
  }
  const str = new Uint8Array(Buffer.from(num + '.                               '));
  if (i % 3 === 1) fs.writeFile(__dirname + 'README.md', '\r\n', { flag: 'a' });
  fs.writeFile(__dirname + '/README.md', str, { flag: 'a' });
}
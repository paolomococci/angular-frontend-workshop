const path = require('path');
const src = path.join(
  process.cwd(),
  'src',
  'electron'
);

module.exports = {
  entry: path.join(src, 'main.ts'),
  output: {
    path: path.join(
      process.cwd(),
      'dist',
      'open-see-get'
    ),
    filename: 'shell.js'
  }
};

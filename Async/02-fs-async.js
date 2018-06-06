const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(file, msg, cb) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(file, line, cb);
}

console.time('Logs DONE');
console.time('Thread idle');
fs.stat(dirPath, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, (err) => {
      if (err) {
        return console.log(err);
      }
      next();
    });
  }
  else if (err) {
    return console.log(err);
  }
  next();
});
console.timeEnd('Thread idle');

// Callback hell / Pyramid of doom
function next() {
  log(filePath, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err);
    }
    log(filePath, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err);
      }
      log(filePath, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err);
        }
        log(filePath, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err);
          }
          log(filePath, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err);
            }
            console.timeEnd('Logs DONE');
          });
        });
      });
    });
  });
}
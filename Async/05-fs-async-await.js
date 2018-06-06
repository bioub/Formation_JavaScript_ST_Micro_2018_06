const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');


function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(file, line);
}

async function doLogs() {
  // try {
    try {
      const stats = await fs.stat(dirPath);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(dirPath);
      }
      else {
        throw err;
      }
    }
  
    await log(filePath, 'Ligne 1');
    await log(filePath, 'Ligne 2');
    await log(filePath, 'Ligne 3');
    await log(filePath, 'Ligne 4');
    await log(filePath, 'Ligne 5');
    console.timeEnd('Logs DONE');
  // }
  // catch(err) {
  //   console.log(err);
  // }
}

console.time('Logs DONE');
console.time('Thread idle');
doLogs().catch((err) => console.log(err));
console.timeEnd('Thread idle');
const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function deleteAndCreateDist() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
  console.log('deleteAndCreateDist done');
}

async function buildJS() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = '';

  for (const buffer of buffers) {
    content += buffer.toString();
  }

  if (true) {
    content = UglifyJS.minify(content).code;
  }

  await fs.appendFile(appJsDistPath, content);

  console.log('buildJS done');
}

async function buildHTML() {
  const buffer = await fs.readFile(indexHtmlPath);

  let content = buffer.toString();

  content = content.replace(/<script.+<\/script>/s, '<script src="./app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('buildHTML done');
}

(async () => {
  await deleteAndCreateDist();
  await Promise.all([
    buildJS(),
    buildHTML(),
  ]);
  console.log('Build done');
})().catch((err) => console.log(err));

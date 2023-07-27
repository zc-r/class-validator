// eslint-disable-next-line @typescript-eslint/no-var-requires
const PackageJSON = require('../package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('colors');

// 保留字段，其余字段均删除
const reserve_keys = [ 'name', 'version', 'description', 'author', 'license', 'sideEffects', 'main', 'module', 'es2015', 'typings', 'repository', 'tags', 'dependencies' ];

for (const key of Object.keys(PackageJSON)) {
  if (!reserve_keys.includes(key)) {
    delete PackageJSON[key];
  }
}

const info = JSON.stringify(PackageJSON, null, 2);

if (!fs.existsSync('build')) {
  console.log(colors.red(` 🌟 优先打包文件再执行此命令。\n`));
  return;
}

fs.writeFileSync('./build/package.json', info, { encoding: 'utf-8' });

fs.copyFileSync('./README.md', './build/README.md');

fs.copyFileSync('./LICENSE', './build/LICENSE');

console.log(colors.green(` 🌟 版本号: ${PackageJSON.version}\n`))

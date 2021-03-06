const path = require('path');
const shelljs = require('shelljs');
const { program } = require('commander');

const targetFile = path.resolve(__dirname, '../package.json');
const packagejson = require(targetFile);
const currentVersion = packagejson.version;
const versionArr = currentVersion.split('.');
const [mainVersion, subVersion, phaseVersion] = versionArr;

// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${Number(phaseVersion) + 1}`;

let newVersion = defaultVersion;

// 从命令行参数中取版本号
program
  .option('-v, --versions <type>', 'Add release version number', defaultVersion);

program.parse(process.argv);

// 获取参数
const options = program.opts();

if (options.versions) {
  newVersion = options.versions;
}

function publish() {
  // shelljs.sed('-i', '"name": "ktools"', '"name": "@kagol/ktools"', targetFile); // 修改包名
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile); // 修改版本号
  // shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, path.resolve(__dirname, '../package.json')); // 同步更新项目中的版本号
  shelljs.cd('dist');
  shelljs.exec('npm publish'); // 发布
}

publish();
#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const names = ['sun-ge-persona', 'sun-ge-humanizer'];

function exists(target) {
  try {
    fs.lstatSync(target);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

// Resolve existing ancestors so a symlink cannot route an install into the source.
function realDestination(target) {
  const suffix = [];
  let ancestor = target;
  while (!exists(ancestor)) {
    suffix.unshift(path.basename(ancestor));
    ancestor = path.dirname(ancestor);
  }
  return path.join(fs.realpathSync.native(ancestor), ...suffix);
}

function isInside(parent, target) {
  const relative = path.relative(parent, target);
  return relative === '' || (!path.isAbsolute(relative) && relative !== '..' && !relative.startsWith('..' + path.sep));
}

function install() {
  const args = process.argv.slice(2);
  let destination = path.resolve('.agents', 'skills');
  let help = false;
  let customDirectory = false;
  for (let index = 0; index < args.length; index++) {
    if (args[index] === '--help') {
      help = true;
    } else if (args[index] === '--dir' && !customDirectory) {
      const value = args[++index];
      if (!value || value.startsWith('--')) throw new Error('--dir 后面需要填写技能目录路径。');
      destination = path.resolve(value);
      customDirectory = true;
    } else {
      throw new Error('未知参数：' + args[index] + '。用 --help 查看用法。');
    }
  }

  if (help) {
    console.log('孙哥上号 · 安装两个完整技能\n\n用法：npx sun-ge-persona-skill [--dir <技能目录>]\n默认：当前项目的 .agents/skills\n--help  查看帮助\n\n已有同名技能时会停止，不覆盖文件。');
    return;
  }

  const source = fs.realpathSync.native(path.join(__dirname, '..', 'skills'));
  destination = realDestination(destination);
  if (isInside(source, destination)) throw new Error('目标不能放在技能来源目录里面，请换一个 --dir 路径。');
  const targets = names.map(name => path.join(destination, name));
  for (const target of targets) {
    if (exists(target)) throw new Error('目录已存在：' + target + '。请保留原文件，换一个 --dir 路径。');
  }
  for (const name of names) {
    if (!fs.statSync(path.join(source, name, 'SKILL.md')).isFile()) throw new Error('技能包不完整：' + name);
  }

  fs.mkdirSync(destination, { recursive: true });
  const staging = fs.mkdtempSync(path.join(destination, '.sun-ge-install-'));
  const created = [];
  try {
    for (const name of names) {
      fs.cpSync(path.join(source, name), path.join(staging, name), { recursive: true, force: false, errorOnExist: true });
    }
    // Exclusive directory creation protects both targets, including a concurrent install.
    for (const target of targets) {
      fs.mkdirSync(target);
      created.push(target);
    }
    for (let index = 0; index < names.length; index++) {
      fs.cpSync(path.join(staging, names[index]), targets[index], { recursive: true, force: false, errorOnExist: true });
    }
  } catch (error) {
    for (const target of created.reverse()) fs.rmSync(target, { recursive: true, force: true });
    if (error.code === 'EEXIST') throw new Error('目标目录已存在，安装停止；已有文件未被覆盖。');
    throw error;
  } finally {
    fs.rmSync(staging, { recursive: true, force: true });
  }
  console.log('孙哥已上号。两个技能已安装到：\n' + destination + '\n\n使用：用 sun-ge-persona 回我。');
}

try {
  install();
} catch (error) {
  console.error('安装失败：' + error.message);
  process.exitCode = 1;
}

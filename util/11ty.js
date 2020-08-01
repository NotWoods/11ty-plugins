const fs = require('fs');
const childProcess = require('child_process');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const execFile = promisify(childProcess.execFile);
const eleventy = require.resolve(
  process.platform === 'win32' ? '.bin/eleventy.cmd' : '.bin/eleventy'
);

async function readOutput(fixture, path = 'index.html') {
  const output = await readFile(`${fixture}/_site/${path}`, 'utf8');
  return output.trim();
}

async function runEleventy(fixture) {
  return await execFile(eleventy, { cwd: fixture, windowsHide: true });
}

module.exports = {
  readOutput,
  runEleventy,
};

const os = require('os');
console.log({
  version: os.version(),
  cpus: os.cpus(),
  hostname: os.hostname(),
  platform: os.platform(),
  arch: os.arch(),
});
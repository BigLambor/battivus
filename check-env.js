// check-env.js - Check Node.js environment
console.log('Node version:', process.version);
console.log('npm version: run npm --version separately');
console.log('Platform:', process.platform);
console.log('Arch:', process.arch);
console.log('Home:', process.env.HOME);
console.log('Path includes fnm:', process.env.PATH?.includes('fnm') || false);

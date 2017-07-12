#!/usr/bin/env node

const fs = require('fs')

if (process.argv[2] === 'badge') {
  console.log('[![Development sponsored by voltra.co](https://img.shields.io/badge/Development%20sponsored%20by-Voltra.co-yellow.svg)](https://voltra.co/)')
  return
}

const logo = fs.readFileSync(`${__dirname}/logo.txt`, 'utf8')

process.stdout.write(logo)
if (process.argv[2] && process.argv[2].indexOf('copy') > -1) {
  process.stdout.write(`\n© Copyright Voltra Co., ${new Date().getFullYear()}\n`)
}

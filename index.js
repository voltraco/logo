#!/usr/bin/env node
const fs = require('fs')
const logo = fs.readFileSync(`${__dirname}/logo.txt`, 'utf8')
process.stdout.write(logo)
if (process.argv[2] && process.argv[2].indexOf('copy') > -1) {
  process.stdout.write(`\n© Copyright Voltra Co., ${new Date().getFullYear()}\n`)
}

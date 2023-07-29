const zlib = require('zlib');
const fs = require('fs');

var unzip = zlib.createUnzip();

const input = fs.createReadStream('./files/file1.txt.gz')
const output = fs.createWriteStream('./files/file1.txt')

input.pipe(unzip).pipe(output)
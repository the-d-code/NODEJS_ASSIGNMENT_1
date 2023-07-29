const zlib=require('zlib');
const fs=require('fs');

var zip=zlib.createGzip();

const read=fs.createReadStream('./files/file1.txt');
const write=fs.createWriteStream('./files/file1.txt.gz');

read.pipe(zip).pipe(write);
const fs = require('fs');
const path = require('path');
const createReader = fs.createReadStream(path.resolve(__dirname, 'text.txt'));

createReader.on('data', (data) => console.log(data.toString()));

createReader.on('end', () => createReader.close());

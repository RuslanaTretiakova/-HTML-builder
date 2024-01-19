const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.output.write('Hello, how is your day?\n');

const writeSteam = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));

const finishProcess = () => {
  rl.output.write('Goodbye!\n');
  rl.close();
  writeSteam.end();
  process.exit();
};

rl.on('line', (userInput) => {
  if (userInput === 'exit') {
    finishProcess();
  } else {
    writeSteam.write(userInput + '\n');
  }
});

rl.on('SIGINT', () => {
  finishProcess();
});

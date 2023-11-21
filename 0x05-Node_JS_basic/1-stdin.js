process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const user = process.stdin.read();
  if (user !== null) {
    process.stdout.write(`Your name is: ${user}`);
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

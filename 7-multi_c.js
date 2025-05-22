const x = parseInt(process.argv[2]);
const valid = !isNaN(x) && x >= 0;

// Using a while loop with unconventional formatting
let i = 0;
while(i < (valid ? x : 1)) {
  console.log(valid ? 'C is fun' : 'Missing number of occurrences');
  i++;
  if (!valid) break;
}
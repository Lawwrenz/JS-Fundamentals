const x = parseInt(process.argv[2]);
const valid = !isNaN(x) && x >= 0;

// Using a for loop without space after 'for'
let i=0;for(;i<(valid?x:1);i++) {
  console.log(valid ? 'C is fun' : 'Missing number of occurrences');
  if(!valid) break;
}
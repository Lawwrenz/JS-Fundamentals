const x = parseInt(process.argv[2]);
let output = 'Missing number of occurrences';
let count = 0;

if (!isNaN(x) && x > 0) {
  output = 'C is fun';
  count = x;
}

let i = 0;
while (i < count || (i === 0 && output === 'Missing number of occurrences')) {
  console.log(output);
  i++;
}
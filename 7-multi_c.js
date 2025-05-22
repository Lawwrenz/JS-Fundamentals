const x = parseInt(process.argv[2]);

const isValid = !isNaN(x) && process.argv[2] !== undefined && process.argv[2].trim() !== '';

let i = 0;
while(i < (isValid ? x : 1)) {
    console.log(isValid ? 'C is fun' : 'Missing number of occurences');
    i++;
}
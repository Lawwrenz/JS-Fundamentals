const x = parseInt(process.argv[2]);
const valid = !isNaN(x) && x >= 0;

// using a label with a block and break statement to simulate a loop
let i = 0;
loop: {
    if(!valid){
        console.log('Missing number of occurences');
        break loop;
    }
    console.log('C is fun');
    if(++i < x) break loop;
}
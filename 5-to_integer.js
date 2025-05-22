const num = process.argv[2];

if (num === undefined || isNaN(num) || num.trim() === ''){
    console.log("Not a Number");
}else {
    console.log(`My number: ${parseInt(num, 10)}`);
}
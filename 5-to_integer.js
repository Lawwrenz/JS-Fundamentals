const num = process.argv[2];

if(isNaN(num) || num.trim() === ''){
    console.log("Not a Number");
}else{
    console.log(`My number: ${parseInt(num, 10)}`);
}
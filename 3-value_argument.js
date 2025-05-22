const args = process.argv.slice(2); // prints the first argument passed on it

if(args[0] === undefined){
console.log("No argument"); // prints if no argument is passed
}else {
console.log(args[0]); // prints the first argument
}
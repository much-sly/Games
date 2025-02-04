const prompt = require("prompt-sync")({sigint:true})
let input = prompt("Please enter your input");
let points = 0;
if (input.startsWith ('?')){

if (input[1] === '!'){
    points += 2;
}
else if (input[1] === '%'){
    points += 3;
}
else {
    points+=1;
}
}
if (input.includes('?')){
    console.log(`${points + input.length}`);
}
else{
    console.log('Oops!, no points for you');
}
console.log(`user has: ${points} points`);


let maximum=parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number"));
}
const targetNum =Math.floor(Math.random()*maximum+1);
let guess= parseInt (prompt ("enter your first guess"));
let attempts = 1;
while(parseInt(guess)!==targetNum){
  if (guess==='q') break;
  attempts++;
  if(guess >targetNum){
guess=prompt("too high! Enter a new guess:");
  } else {
    guess=prompt("too low! enter a new guess");

  }

}
if (guess==='q'){
  console.log("Ok, you quit ")
} else {
  console.log ("congrats , you win!")
  console.log(`you got it ! It took you ${attempts} guesses`)
}

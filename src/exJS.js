// JavaScript

/*1- 1- Write a JavaScript program where the program takes a random integer between 1 and 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched".*/

function numberRandomYesOrNo(num){
    let n=Math.floor(Math.random() * (10-1))-1;
    console.log(n);
    if(num===n){
        return "Good Work";
    }else{
        return "Not matched";
    }
}

let num;
num=prompt("Enter your number",null);
console.log(numberRandomYesOrNo(num));
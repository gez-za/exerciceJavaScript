// JavaScript

/*1- 1- Write a JavaScript program where the program takes a random integer between 1 and 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched".*/

const isMatchWithRandomNumber = (num) => {
    let guess=Math.floor(Math.random() * (10-1)) +1;
    if(num===guess){
        return "Good Work";
    }else{
        return "Not matched";
    }
}
module.exports = isMatchWithRandomNumber;
/*
//2. Write a JavaScript program to calculate days left until next Christmas.
const daysLeftUntilNextChristmas = () => {
    const dateActuelle = new Date();
    const jour = dateActuelle.getDate();
    let mois = dateActuelle.getMonth() + 1;
    let numMois = 0;
    for (let i = 0; i < mois; i = i + 2) {
        numMois++;
        if (i === 8) {
            numMois++;
        }
    }
    let totalJours = (numMois * 31) + (((mois - numMois) - 1) * 30) - 2 + jour;
    return (365 - 31) - totalJours + 25;
}

module.exports=daysLeftUntilNextChristmas
//console.log(`le nombre de jours restant avant Noel est: ${result}`);

//3. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).


const multiplicationAndDivision = (num1, num2) => {
    if (num2 === 0)
        alert("Please enter a number greater than 0");

    return  `${num1 * num2}   ${num1 / num2}`;
};

module.exports=multiplicationAndDivision;
console.log(multiplicationAndDivision(2, 3));
//4. Write a JavaScript program to find the longest string from a given array.


const theLongestStringOfArray= (arr) =>{
    let  max_len= "".concat(arr[0]).length;
    let max_str="";
    for (let i = 0; i < arr.length; i++) {
        let value = "".concat(arr[i]).length;
        if(value > max_len) {
             max_len=value;
             max_str += arr[i]
        }
    }

    return  max_str;
}
module.exports=theLongestStringOfArray;
//5. Write a JavaScript program to get the largest even number from an array of integers.

const largestNumberEven= (arr)=> {
    let arrEven=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        }
    }
   return Math.max.apply(Math, arrEven);
}
module.exports = largestNumberEven;

//6. Write a JavaScript program to remove all characters from a given string that appear more than once.

const removeDuplicateChars= (str) => {

     for (let i = 0; i < str.length; i++) {
         for (let j = 0; j < str.length; j++) {
             if (str[i]===str[j] && str.indexOf(str[i]) !==j) {
                 str = str.replace(new RegExp(str[j],'g'), '');
             }
         }
     }
     return str;
 }

 module.exports=removeDuplicateChars;

//7. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

const sumOfCubes= (num)=>
{
    let sum = 0;
    for (let j = 1; j <= num; j++) {
        sum += Math.pow(j, 3);
    }
    return sum;
}
module.exports=sumOfCubes;

//8.  Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.



const compareTwoObjects = (objet1, objet2) =>{
    let b = [];
    let c = [];
    for (const objet2Key in objet2) {
        if (objet2Key in objet2) {
            if (objet2[objet2Key] === objet1[objet2Key]) {
                b = true;
                c.push(b);
            } else {
                b = false;
                c.push(b);
            }
        } else {
            break;
        }
    }
     return c.every(e => e === true) ;
}
module.exports=compareTwoObjects;
//9. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

const filterValueArray = (arr,...args) =>{
return arr.filter(item=>!args.includes(item));
}

module.exports=filterValueArray;
//10.Write a JavaScript program to extract out the values at the specified indexes from a specified array.

const filterIndexArray = (arr,...args) =>{

    return arr.filter(item=>!args.includes(arr.indexOf(item)));
}

module.exports=filterIndexArray;
/*11. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/
//
/*const deleteRollno =(student) =>
{
    delete student.rollno;
    return student;
}
    module.exports=deleteRollno;
//12. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

let cylinder={
    rayon:2,
    height:20,
    volume:()=>{
        return (Math.PI*cylinder.rayon**2*cylinder.height).toFixed(4);
    }
}
module.exports=cylinder.volume();

//13. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


const clock = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let days = time.getSeconds();

    while (days < 60) {
        if (days < 60) {
            days = days + 1;
            return `"${hours}:${minutes}:${days}"`;
        }
    }
}

module.exports=clock;
//14. Write a JavaScript program to check if a string is lower case or not.

const isToLowerCase = (str) =>{
    if(str[0]===str[0].toUpperCase() ){
        let newStr = str.substring(1);
        return newStr === newStr.toLowerCase();
    }else{
        return true;
    }
    //const otherStr=str.toLowerCase();
    //return otherStr === str;
}


module.exports=isToLowerCase;
//15. Write a function called add with two parameters which return a promise containing the result or the error message "Must provide two parameters" in case the user provided only no or only one parameter.
const add = (...args) => {
    if(args.length<2){
       return "Tu dois fournir deux paramètres";
    }else if(args.length===2){
        return "it is ok";
    }
}

module.exports=add;

//16. Declare a constant variable called `euler` and assign it the value of Euler's number (approximately 2.71828) rounded to four decimal places.

const euler=Math.exp(1).toFixed(5);


//17.  Write an arrow function called `findMax` that takes an array of numbers as input and returns the largest number in the array. Use the spread operator and Math.max() function.

const findMax= (arr) =>
{return Math.max.apply(Math,[...arr]);};

module.exports=findMax;
//18. Create a template literal that includes variables `product`, `price`, and `quantity`. The template should output "You purchased [quantity] units of [product] for $[totalPrice]."

const modele={
    produit:"huile",
    prix:1500,
    quantite:10,
    affiche:()=>{
        let totalPrix=modele.prix * modele.quantite;
        return `Vous avez achete ${modele.quantite} unites de ${modele.produit} pour ${totalPrix}`;
    }
}
//19.Given two arrays `arr1` and `arr2`, create a new array `combinedArr` that contains all the unique elements from both arrays, sorted in ascending order.

const combineArray = (arr1,arr2) => {
   let combineArr = [];
   let  newArr1=[...new Set(arr1)];
   let newArr2=[...new Set(arr2)];
   for(let i=0;i<newArr1.length;i++){
       combineArr.push(newArr1[i]);
   }
    for(let i=0;i<newArr2.length;i++){
        if(!combineArr.includes(newArr2[i])){
            combineArr.push(newArr2[i]);
        }
    }
   return combineArr.sort();
}

module.exports= combineArray;
// Exemple d'utilisation

//20. Declare an object called `car` with properties `make`, `model`, and `year`. Use destructuring assignment with default values to extract `make` and `model`, and assign the default value "unknown" to `year`.

const car={
    make:undefined,
    model:undefined,
    year:2010
};
car["make"]="unknown";
car["model"]="unknown";

//21. Write a function called `calculateArea` that takes the radius of a circle as a parameter. The function should return the area of the circle. If no radius is provided, the function should throw an error with the message "Radius is missing!".

const calculateArea = (rayon) =>{
    if(arguments.length===0){
        return " Radius is missing!";
    }else{
        return (Math.PI*2*(rayon**2)).toFixed(4);
    }
}
module.exports= calculateArea;
//22. Write a function called `average` that takes any number of arguments (representing scores) and returns the average score. Round the result to two decimal places.
const average = (...args) =>{
    let sum=0;
    for (let i=0; i<args.length; i++){
        sum += args[i];
    }
    return (sum/args.length).toFixed(2);
}
module.exports = average;
//23. Given an array of strings, use the `map` method to create a new array where each string is reversed.

const reverseString = (arr) => {
    return arr.map(item=>item.split('').reverse().join(''));
}

module.exports=reverseString;
//24 Given an array of objects representing books (each object has properties `title` and `pages`), use the `filter` method to create a new array containing only the books with more than 300 pages.

const filterBook = (book) => {
    return book.filter(item=>item.pages>300);
}

module.exports=filterBook;
//25.  Write a function called `fetchData` that simulates fetching data from an API. It should return a promise that resolves with the string "Data fetched successfully!" after a random delay between 2 to 8 seconds.
  const fetchData = () => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;

    setTimeout(() => {
      resolve("Donnees recuperée avec succès!");
    }, delay);
  });
}

module.exports=fetchData;*/
// Example usage:
//fetchData().then((message) => console.log(message));







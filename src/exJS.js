// JavaScript

/*1- 1- Write a JavaScript program where the program takes a random integer between 1 and 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched".*/

function isMatchWithRandomNumber(num){
    let guess=Math.floor(Math.random() * (10-1)) +1;
    if(num===guess){
        return "Good Work";
    }else{
        return "Not matched";
    }
}

/*let num=prompt("Enter your number",null);
console.log(numberRandomYesOrNo(num));*/

//2. Write a JavaScript program to calculate days left until next Christmas.
function daysLeftUntilNextChristmas() {
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
//console.log(`le nombre de jours restant avant Noel est: ${result}`);

//3. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).


const multiplication =(num1, num2) => { return  num1 * num2};

const division = (num1 , num2) =>{
    if (num2 === 0)
        alert("Please enter a number greater than 0");
    else
        return  num1 / num2;
};

//4. Write a JavaScript program to find the longest string from a given array.


function theLongestStringOfArray(arr) {
    let taille = [];
    for (let i = 0; i < arr.length; i++) {
        let value = " ".concat(arr[i]).length;
        taille.push(value);
    }
    return  Math.max.apply(Math, taille);
}
//let arr=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]

//5. Write a JavaScript program to get the largest even number from an array of integers.

function largestNumberEven (arr) {
    let arrEven=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        }
    }
   return Math.max.apply(Math, arrEven);
}

//6. Write a JavaScript program to remove all characters from a given string that appear more than once.

 function removeDuplicateChars(str) {
     for (let i = 0; i < str.length; i++) {
         if (str[i]) {
             str = str.replace(new RegExp(str[i], 'g'), '');
         }
     }
     return str;
 }
//7. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

function sumOfCubes(num)
{
    let sum = 0;
    for (let j = 1; j <= num; j++) {
        sum += Math.pow(j, 3);
    }
    return sum;
}

//8.  Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.



function compareTwoObjects(objet1, objet2) {
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
//9. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

function filterValueArray(arr){
    for(let i=0; i<arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arguments[i]) {
                arr.splice(j, 1);
            }
        }
    }
return arr;
}


//10.Write a JavaScript program to extract out the values at the specified indexes from a specified array.

function filterIndexArray(arr){
    for(let i=0; i<arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j=== arguments[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}


//11. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//
function deleteRollno(student)
{
    return delete student.rollno;
}
//12. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

let cylindre={
    rayon:2,
    height:20,
    volume:()=>{
        return Math.PI*cylindre.rayon**2*cylindre.height;
    }
}


//13. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


function clock() {
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
//14. Write a JavaScript program to check if a string is lower case or not.

function isToLowerCase(str){
    const otherStr=str.toLowerCase();
    return otherStr === str;
}


//15. Write a function called add with two parameters which return a promise containing the result or the error message "Must provide two parameters" in case the user provided only no or only one parameter.
function add(param1, param2) {
    if(arguments.length<2){
       return "Tu dois fournir deux paramètres";
    }else{
        return param1+param2;
    }
}

//16. Declare a constant variable called `euler` and assign it the value of Euler's number (approximately 2.71828) rounded to four decimal places.

const euler=Math.exp(1).toFixed(5);


//17.  Write an arrow function called `findMax` that takes an array of numbers as input and returns the largest number in the array. Use the spread operator and Math.max() function.

const findMax= (arr) =>
{return Math.max.apply(Math,[...arr]);};


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

const unique = (arr) => {
   let newArr = [];
   for(let i=0;i<arr.length;i++){
       if(newArr.includes(arr[i])){
           continue;
       }else{
           newArr.push(arr[i]);
       }
   }
   return newArr.sort();
};

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

function calculateArea(rayon){
    if(arguments.length===0){
        return " Rayon manquant !";
    }else{
        return Math.PI*2*(rayon**2);
    }
}

//22. Write a function called `average` that takes any number of arguments (representing scores) and returns the average score. Round the result to two decimal places.
function average(){
    let sum=0;
    for (let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return (sum/arguments.length).toFixed(2);
}

//23. Given an array of strings, use the `map` method to create a new array where each string is reversed.

function reverseString(arr) {
    const newArr = arr.map(function (item) {
         item.split('').reverse().join('');
    });
    return newArr;
}
//24 Given an array of objects representing books (each object has properties `title` and `pages`), use the `filter` method to create a new array containing only the books with more than 300 pages.

function filterBook(book) {
    book.filter(function (item) {
        return item.page > 300;
    });
}

//25.  Write a function called `fetchData` that simulates fetching data from an API. It should return a promise that resolves with the string "Data fetched successfully!" after a random delay between 2 to 8 seconds.
   function fetchData() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;

    setTimeout(() => {
      resolve("Donnees recuperée avec succès!");
    }, delay);
  });
}

// Example usage:
//fetchData().then((message) => console.log(message));







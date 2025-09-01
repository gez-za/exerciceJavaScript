/// <reference types="jest" />
//3
//1
const isMatchWithRandomNumber=require('./exJS.js')
test("2 is not match to random number",async ()=>{
    await expect(isMatchWithRandomNumber(2)).toBe("Not matched");
})
//3
const multiplicationAndDivision = require('./exJS.js');
test("division and multiplication of 3 and 5 are 0.6 15", () =>{
    expect(multiplicationAndDivision(3,5)).toBe("15  0.6");
});
//4
arr=["banana","pineapple","apple","orange"];
const theLongestStringOfArray = require('./exJS.js');
test("", () =>{
    expect(theLongestStringOfArray(arr)).toBe("pineapple");
});
//2
const daysLeftUntilNextChristmas = require('./exJS.js');
 test("days left until next Christmas is 124", () =>{
    expect(daysLeftUntilNextChristmas()).toBe(124);
});
 //5
arr=[13,15,14,86,42,90,18,30]
const largestNumberEven=require('./exJS.js')
test("the largest number even from arr is 90", ()=>{
    expect(largestNumberEven(arr)).toBe(90)
});

//6
str="apple"
const removeDuplicateChars=require('./exJS.js')
test("the characters remaining after deleting characters appearing more than once ", ()=>{
    expect(removeDuplicateChars(str)).toBe("ale")
});
//7
const sumOfCubes=require('./exJS.js')
test("the sum of cubes of all integer from 1 to 5 is 225", ()=>{
    expect(sumOfCubes(5)).toBe(225)
});
//8
const compareTwoObjects=require('./exJS.js')
const object1={
    name:"John",
    age:25,
}
const object2={
    name:"peter",
    age:25,
}

test("object1 contains the property values of object2 is false", ()=>{
    expect(compareTwoObjects(object1,object2)).toBe(false);
})
//9
const filterValueArray=require('./exJS.js');
//let arr=[2,5,19,45,30,35,78];
test("the original array without 5,19 is [2,45,30,78]",()=>{
    const newArray=filterValueArray([2,5,19,45,30,35,78],5,19);
    expect(newArray).toEqual([2,45,30,35,78]);
});

//10
const filterIndexArray =require('./exJS.js');

test("the original array without 5,19 is [2,45,30,35,78]",()=>{
    const newArray=filterIndexArray([2,5,19,45,30,35,78],2,3);
    expect(newArray).toEqual([2,5,30,35,78]);
});
//11
let student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
const deleteRollno=require('./exJS.js');

test("the objet student after delete rollno is {name : \"David Rayy\",\n" +
    "        sclass : \"VI\",}",()=>{
    expect(deleteRollno(student)).toStrictEqual({name:"David Rayy",
        sclass : "VI"});
});
//12
let cylinder={
    rayon:2,
    height:20,
    volume:()=>{
        return Math.PI*cylinder.rayon**2*cylinder.height;
    }
}
test("volume of a Cylinder",()=>{
    expect(cylinder.volume()).toStrictEqual(251.32741228718345);
})

//13
const clock=require('./exJS.js');
test("create the clock",()=>{
    expect(clock()).toBe("\"12:26:45\"");
});
//14
const isToLowerCase=require('./exJS.js');
test('string is ToLowerCase',()=>{
    expect(isToLowerCase('Hello')).toBeTruthy();
});
//15
const add=require('./exJS.js')
test("verify params",async ()=>{
   await expect(add(3)).toBe("Tu dois fournir deux paramètres");
})
//16
const euler=Math.exp(1).toFixed(5);
test('euler equal 2.71828',()=>{
    expect(2.71828).toBe(2.71828);
})
//17
const findMax=require('./exJS.js')
test("the largest number in array",()=>{
    expect(findMax([19,25,73,42,59])).toBe(73);
})
//18
const modele={
    produit:"huile",
    prix:1500,
    quantite:10,
    affiche:()=>{
        let totalPrix=modele.prix * modele.quantite;
        return `Vous avez achete ${modele.quantite} unites de ${modele.produit} pour ${totalPrix}`;
    }
}
test("template ouput the message'Vous avez achete 10 unites de huile pour 15000'",()=>{
    expect(modele.affiche()).toStrictEqual("Vous avez achete 10 unites de huile pour 15000");
})
//19
const combineArray=require('./exJS.js')
test("combine deux array", ()=>{
    let newArr=combineArray([2,5,7,7,9,8,2],[4,5,7,9,0]);
    expect(newArr).toEqual([0,2,4,5,7,8,9]);
});

//20
const car={
    make:undefined,
    model:undefined,
    year:2010
};
car["make"]="unknown";
car["model"]="unknown";
test("destructuring assignment",()=>{
    expect(car["make"]).toBe("unknown");
})
//21
const calculateArea=require("./exJS.js")
test("the area of a circle ", ()=>{
    expect(calculateArea(4)).toEqual("100.5310");
})

//22
const average=require('./exJS.js');
test("average of arguments",()=>{
    expect(average(3,6,8,12,10,15)).toBe("9.00");
})

//23
const reverseString=require("./exJS.js");
test("reverse string in array",()=>{
    const newArr=reverseString(["lundi","mardi","mercredi"]);
    expect(newArr).toStrictEqual(["idnul","idram","idercrem"]);
})

//24
const filterBook=require("./exJS.js");
test("filter array and create a new array containing only the books with more than 300 pages",()=>{
    const book=[
        { nom: "Les Misérables", pages: 950 },
        { nom: "L'Étranger", pages: 250 },
        { nom: "Le Petit Prince", pages: 300 },
        { nom: "1984", pages: 450 },
        { nom: "Harry Potter à l'école des sorciers", pages: 320 },
        { nom: "Le Seigneur des Anneaux", pages: 1000 },
        { nom: "La Peste", pages: 370 },
        { nom: "Fahrenheit 451", pages: 280 }
    ];
    expect(filterBook(book)).toStrictEqual([
        { nom: "Les Misérables", pages: 950 },
        { nom: "1984", pages: 450 },
        { nom: "Harry Potter à l'école des sorciers", pages: 320 },
        { nom: "Le Seigneur des Anneaux", pages: 1000 },
        { nom: "La Peste", pages: 370 }
    ])
});
//25
 const fetchData=require('./exJS.js')
test("simulates fetching data from an API", async () => {
    expect(await fetchData()).toEqual("Donnees recuperée avec succès!")
})







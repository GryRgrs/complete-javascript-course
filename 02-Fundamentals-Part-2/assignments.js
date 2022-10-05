//ACTIVATING STRICT MODE
"use strict";

// let hasDriversLicence = false;
// const passTest = true;
// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("Hey, I can drive..!!")

//const interface = "Audio"


//FUNCTIONS

// function logger() {
// console.log("my name is gary")    
// }
// //....calling, running or invoking the function.....// 
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
console.log(apples, oranges);
const juice = `juice with ${apples} apples and ${oranges} and oranges`;
return juice; 
} 
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
console.log(fruitProcessor)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)
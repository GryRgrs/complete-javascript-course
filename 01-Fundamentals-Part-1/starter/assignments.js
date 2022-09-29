//variables
// let country = "united kingdom";
// let continent = "europe";
// let population = 70,000,000;
// console.log(country);
// console.log(continent);
// console.log(population);




//data-types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof true)
// console.log(typeof 23)
// console.log(typeof "gary")

// javascriptIsFun = "yes!"
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// year = 1991
// console.log(typeof year);

// console.log(typeof null);

// let country = "united kingdom";
// let isIsland = true
// console.log(isIsland)




//let,const and var
// let age = 30;
// age = 31;
// const birthYear = 1991
// birthYear = 1990

// const language = "english"
// console.log(language)
// const language = "french"



//basic operators
// const now = 2037;
// const ageGary = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageGary, ageSarah);

// console.log(ageGary * 2, ageGary / 10, 2 ** 3)
//2 ** 3 means 2 to the power of 3

// const firstName = "gary"
// const lastName = "rogers"
// console.log(firstName + " " + lastName)

//maths assignment operators
// let x = 10 + 5;
// x += 10; //x = x + 10 = 25;
// console.log(x);
// x *= 4;
// x ++;
// console.log(x)

// //comparison operators
// console.log(ageGary > ageSarah) //>, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018)

//operator precedence
// const now = 2037;
// const ageGary = now - 1991;
// const ageSarah = now - 2020;
// console.log(now - 1991 > now - 2018);

// let x, y; 
// x = y = 25 - 10 - 5; // x = y = 10, x = 10; 
// console.log(x,y)

// const averageAge = (ageGary + ageSarah) / 2
// console.log(ageGary, ageSarah, averageAge)


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


// let markWeight = 78
// let markHeight = 1.69
// let johnWeight = 92
// let johnHeight = 1.95
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;
let BMIMark = markWeight / markHeight ** 2;
let BMIJohn = johnWeight / (johnHeight * johnHeight)
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI)



















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
// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;
// let BMIMark = markWeight / markHeight ** 2;
// let BMIJohn = johnWeight / (johnHeight * johnHeight)
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI)


// STRINGS AND TEMPLATE LITERALS
// const firstName ='gary';
// const job = 'coder';
// constBirthYear = 1991;
// const year = 2037
// // const gary = "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!"
// // console.log(gary)

// const garyNew = `I'm ${firstName}, a ${year - birthYear} year old ${coder}!`
// console.log(garyNew)

// console.log(`just a regular string`)

// console.log(`string
// multiple
// lines`)



//TAKING DECISIONS - IF/ELSE STATEMENTS

// const age = 19
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("sarah can start driving");
// } else { 
// const yearsLeft = 18 - age;
// console.log(`sarah has to wait another ${yearsLeft} years`);
// } 
// const birthYear = 1991;


// if (birthYear <= 2000) {
// let century = 20
// } else {
// let century = 21;
// } console.log(century)

//CODING CHALLENGE #2

// let marksBMI = 22.3
// let johnsBMI = 23.9
// if (marksBMI <= johnsBMI){
// console.log (`john has the higher BMI`)
// } else {console.log(`mark has the higher BMI`)
// }


//TYPE CONVERSION
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number (inputYear) + 18);

// console.log(Number("gary"))
// console.log(typeof NaN)
// console.log(String(23))


//TYPE COERCION
// console.log(`I am ` + 23 + ` years old`)
// console.log(`23` / `2`)

//TRUTHY AND FALSY VALUES

//5 falsy value
//0, ""(not a string), undefined, null, NaN.

// console.log(Boolean(0))
// console.log(Boolean(undefined));
// console.log(Boolean("gary"));
// console.log(Boolean({}));

// const money = 50;
// if (money) {
// console.log("don't spend it all")    
// } else {
//  console.log("you should get a job")   
// }

// let height = 3;
// if (height) {
// console.log("yay! height is defined")    
// } else {
// console.log("height is undefined")
// }

//EQUALITY OPERATORS
// const age = 18;
// if (age === 18) console.log("you just became an adult")
// console.log(18 === 19)

//LOGICAL OPERATORS

// const hasDriversLicence = true
// const hasGoodVision = true
// console.log(hasDriversLicence || hasGoodVision)
// console.log(!hasDriversLicence)

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah should Drive");
// } else {
//   console.log("Sarah should walk");
// } 

// const isTired = true;
// console.log(hasDriversLicence && hasGoodVision && !isTired)

//CODING CHALLENGE 3























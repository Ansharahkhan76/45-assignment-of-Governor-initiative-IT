"use strict";
// let Name_1:string = "Ansharah";
// let Name_2:string = "Ansharah Khan";
// let Name_3:string = "Mrs Ansharah Khan";
// // Test for Equality And Inequality With Strings
// if (Name_1 == Name_3) {
//     console.log("Names Are Equal");
// }
// else {
//     console.log("Name Are Not Equal");
// }
// // Test using the lower case fumction
// if (Name_1 != Name_2) {
//     console.log("Nmaes Are Equal");
// }
// else{
//     console.log("Names Are Not Equal");
// }
// // Numerical test involving Equality and inequality greater than and less than, greater than or Equal to, and less than or equal to. 
// let Age_1:number = 18;
// let Age_2:number = 20;
// if (Age_1 == 18) {
//     console.log("You Can Vote")
// } 
// if(Age_1 == 20) {
//     console.log("You can Vote in older category.")
// }
// if (Age_1 <= Age_2) {
//     console.log("Younger") // less
// }
// if (Age_1 >= Age_2) {
//     console.log("Older") // Greater
// } 
// // Tests using "And" and "Or" Operators
// if (Age_1 == 18 && Age_2 == 20) {
//     console.log("Person is Elegible For Vote")
// }
// if (Age_1 == 18 || Age_2 != 20) {
//     console.log("Person is Elegible not For Vote")
// }
// // Test whether an item is in a array
// Define Variables
let mango = "mango";
let UppperCaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test For equality and inquality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("\nIs mango is not equal to mango?");
console.log(mango != mango);
// Test using Lower Case Function
console.log("is MANGO is Equal to mango after converting to LowerCase?");
console.log(UppperCaseMango.toLowerCase() == "mango");
console.log("is MANGO is Equal to mango after converting to LowerCase?");
console.log(UppperCaseMango.toLowerCase() != "mango");
// Numerical Tests
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);
// Greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\n Twenty is less than or equal to 10");
console.log(twenty <= 10);
// Test using "And" & "OR" operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using  || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array
console.log("\nIs orange include in my Fruits array?");
console.log(fruits.includes("orange")); // returns true if element is present
// Not Include
console.log("\nIs orange not incluse in my Fruits array");
console.log(!fruits.includes("orange")); // returns

"use strict";
//Q1:Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.
let longText = "qwertyuiopasdfghjklzxcvbnm0123456789*/+-.";
let shortText = longText.substring(0, 10);
console.log(shortText);
//Q2:Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1 = "abc";
let str2 = "def";
let result = str1 === str2;
console.log(result);
//Q3:Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} Rupees.
let product = "Laptop";
let price = 100000;
console.log(`The product ${product} is priced at ${price} Rupees`);
//Q4:Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
//Q5:Write a TypeScript function called isDivisibleBy4and8 tbhat takes a number as a parameter returns true if the number is divisible by both 4 and 8
let isDivisibleBy4and8 = (n) => {
    return n % 4 == 0 && n % 8 == 0;
};
console.log(isDivisibleBy4and8(9));

"use strict";
//Type Annotations
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
let prod = "Laptop";
let p = 100000;
console.log(`The product ${prod} is priced at ${p} Rupees`);
//Q4:Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
//Q5:Write a TypeScript function called isDivisibleBy4and8 tbhat takes a number as a parameter returns true if the number is divisible by both 4 and 8
let isDivisibleBy4and8 = (n) => {
    return n % 4 == 0 && n % 8 == 0;
};
console.log(isDivisibleBy4and8(8));
//Q6:Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome.
const isPalindrome = (str) => str === str.split("").reverse().join("");
console.log(isPalindrome("racecar"));
//Q7:Find out average using function
const calculatedAverage = (num) => (num.reduce((total, e) => total + e)) / num.length;
console.log(calculatedAverage([1, 2, 3, 4, 5, 6, 0]));
//Q8:Find out maximum number
const findMaxValue = (num) => num.reduce((p, c) => {
    if (p < c) {
        p = c;
    }
    return p;
});
console.log(findMaxValue([1, 99, -80, 4, 5]));
//Create an object and give it type annotation
let productObject = {
    name: "Laptop",
    price: 100000,
    quantity: 4,
    isAvailable: true,
};
//Calculate price of all products in productObject
let productPriceCalculator = (productObject) => productObject.price * productObject.quantity;
console.log(productPriceCalculator(productObject));
let employee1 = {
    name: "David",
    age: 29,
    intro: (country) => `My name is ${employee1.name}, I am from ${country} and I am ${employee1.age} years old`
};
console.log(employee1.intro("UK"));
//Enum
var Perks;
(function (Perks) {
    Perks["pro"] = "pro";
    Perks["user"] = "user";
})(Perks || (Perks = {}));
let user1 = {
    username: "abc",
    mail: "abc@gmail.com",
    age: 16,
    password: "123",
    perk: Perks.pro
};
let user2 = {
    username: "efg",
    mail: "efg@gmail.com",
    age: 26,
    password: "456",
    perk: Perks.user
};
let login = (user) => {
    return user.perk === Perks.pro ? `${user.username} is allowed to get Free Delivery` : `${user.username} will have to pay delivery charge `;
};
console.log(login(user2));
let person1 = ["abc", 19, true];
let person2 = ["efg", 15, false];
let licenseChecker = (person) => {
    let [name, age, boolean] = person;
    return `My name is ${name} and I am ${age} years older ${boolean ? "and I have Driving License" : "and I don't have license"}`;
};
console.log(licenseChecker(person1));
let product1 = ["Laptop", 1000, 10];
let product2 = ["iPhone", 1200, 13];
let productValueCounter = (product) => {
    let [productName, price, quantity] = product;
    return `${productName}'s price is $${price} and ${quantity} are remaining in stock`;
};
console.log(productValueCounter(product1));
let englishGrades = ["English", 90];
let mathsGrades = ["Maths", 80];
let Science = ["Science", 98];
let gradeCalculator = (grade) => {
    let [subject, percent] = grade;
    return `${subject}:${percent}`;
};
console.log(gradeCalculator(englishGrades));
let jaipurWeather = ["Jaipur", 32, "Cloudy"];
let weatherApp = (weather) => {
    let [city, temperature, condition] = weather;
    return `Temperature in ${city} is ${temperature} and it's ${condition}`;
};
console.log(weatherApp(jaipurWeather));
//Unions
let union = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    return value;
};
console.log(union(33));
let userBasicInfo = { name: "muhammad", age: 15, city: "Jaipur", pincode: 302034 };
let createUserProfile = (user) => {
    return `My name is ${user.name} and I am from ${user.city}`;
};
console.log(createUserProfile(userBasicInfo));

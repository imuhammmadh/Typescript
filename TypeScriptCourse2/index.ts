//Q1:Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.
let longText: string = "qwertyuiopasdfghjklzxcvbnm0123456789*/+-."
let shortText: string = longText.substring(0, 10)
console.log(shortText);
//Q2:Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1: string = "abc"
let str2: string = "def"
let result: boolean = str1 === str2
console.log(result);
//Q3:Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} Rupees.
let product: string = "Laptop"
let price: number = 100000
console.log(`The product ${product} is priced at ${price} Rupees`);
//Q4:Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise
function isEven(n: number): boolean {
    return n % 2 === 0
} console.log(isEven(4));
//Q5:Write a TypeScript function called isDivisibleBy4and8 tbhat takes a number as a parameter returns true if the number is divisible by both 4 and 8
let isDivisibleBy4and8 = (n: number): boolean => {
    return n % 4 == 0 && n % 8 == 0
}
console.log(isDivisibleBy4and8(8));
//Q6:Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome.
const isPalindrome = (str: string): boolean => str === str.split("").reverse().join("");
console.log(isPalindrome("racecar"));
//Q7:Find out average using function
const calculatedAverage = (num: number[]): number => (num.reduce((total: number, e: number) => total + e)) / num.length
console.log(calculatedAverage([1, 2, 3, 4, 5, 6, 0]));
//Q8:Find out maximum number
const findMaxValue = (num: number[]): number => num.reduce((p: number, c: number) => {
    if (p < c) {
        p = c
    }
    return p
})
console.log(findMaxValue([1, 99, -80, 4, 5]));
//Type Aliase
type ProductObjectType = {
    name: string;
    price: number;
    isAvailable: boolean;
    quantity: number;
}
//Create an object and give it type annotation
let productObject: ProductObjectType = {
    name: "Laptop",
    price: 100000,
    quantity: 4,
    isAvailable: true,
}
//Calculate price of all products in productObject
let productPriceCalculator = (productObject: ProductObjectType) => productObject.price * productObject.quantity
console.log(productPriceCalculator(productObject));
//Call Signature
type Employee = {
    name: string;
    age: number;
    intro: (country: string) => string
}
let employee1: Employee = {
    name: "David",
    age: 29,
    intro: (country) => `My name is ${employee1.name}, I am from ${country} and I am ${employee1.age} years old`
}
console.log(employee1.intro("UK"));
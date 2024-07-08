//Type Annotations
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
let prod: string = "Laptop"
let p: number = 100000
console.log(`The product ${prod} is priced at ${p} Rupees`);
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
//Enum
enum Perks {
    pro = "pro",
    user = "user",
}
type Credentials = {
    username: string;
    mail?: string;
    age: number;
    password: string;
    perk: Perks;
}
let user1: Credentials = {
    username: "abc",
    mail: "abc@gmail.com",
    age: 16,
    password: "123",
    perk: Perks.pro
}
let user2: Credentials = {
    username: "efg",
    mail: "efg@gmail.com",
    age: 26,
    password: "456",
    perk: Perks.user
}
let login = (user: Credentials): string => {
    return user.perk === Perks.pro ? `${user.username} is allowed to get Free Delivery` : `${user.username} will have to pay delivery charge `
}
console.log(login(user2));
//Tuples
type PersonInfo = [string, number, boolean]
let person1: PersonInfo = ["abc", 19, true]
let person2: PersonInfo = ["efg", 15, false]
let licenseChecker = (person: PersonInfo): string => {
    let [name, age, boolean] = person
    return `My name is ${name} and I am ${age} years older ${boolean ? "and I have Driving License" : "and I don't have license"}`
}
console.log(licenseChecker(person1));
//Q9:You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product.
type ProductInfo = [string, number, number]
let product1: ProductInfo = ["Laptop", 1000, 10]
let product2: ProductInfo = ["iPhone", 1200, 13]
let productValueCounter = (product: ProductInfo): string => {
    let [productName, price, quantity] = product
    return `${productName}'s price is $${price} and ${quantity} are remaining in stock`
}
console.log(productValueCounter(product1));
//Q10:You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade
type SubjectGrade = [string, number]
let englishGrades: SubjectGrade = ["English", 90]
let mathsGrades: SubjectGrade = ["Maths", 80]
let Science: SubjectGrade = ["Science", 98]
let gradeCalculator = (grade: SubjectGrade): string => {
    let [subject, percent] = grade
    return `${subject}:${percent}`
}
console.log(gradeCalculator(englishGrades));
//Q11:You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information
type WeatherData = [string, number, string]
let jaipurWeather: WeatherData = ["Jaipur", 32, "Cloudy"]
let weatherApp = (weather: WeatherData): string => {
    let [city, temperature, condition] = weather
    return `Temperature in ${city} is ${temperature} and it's ${condition}`
}
console.log(weatherApp(jaipurWeather));
//Unions
let union = (value: string | number): string | number => {
    if (typeof value === "string") {
        return value.toUpperCase()
    } else if (typeof value === "number") {
        return value * 2
    }
    return value
}
console.log(union(33));
//Intersections
type User = {
    name: string;
    age: number;
}
type UserLocation = {
    city: string;
    pincode: number
}
let userBasicInfo: User & UserLocation = { name: "muhammad", age: 15, city: "Jaipur", pincode: 302034 }
let createUserProfile = (user: User & UserLocation): string => {
    return `My name is ${user.name} and I am from ${user.city}`
}
console.log(createUserProfile(userBasicInfo));
console.log("Create a function that accepts two numbers as parameters and returns their sum.");

let sum = (a, b) => {
    return a + b

}
console.log(sum(8, 9));

console.log("Create a function that accepts a number n and uses a for loop to print all even numbers from 1 to n.");

let even = (n) => {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);

        }
    }

}
even(20)

console.log("Create an arrow function that accepts a number and returns its factorial.");

let factorial = (n) => {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}
console.log(factorial(6));

console.log("Create a program demonstrating the difference between global scope, function scope, and block scope using var, let, and const.");
console.log("<global>");

var names = "Anbupriya"
let sibling = "Dharshini"
const sister = "Lavanya"
let family = () => {

    console.log(names);
    console.log(sibling);
    console.log(sister);



    if (true) {
        console.log(names);
        console.log(sibling);
        console.log(sister);
    }

}
family()
console.log(names);
console.log(sibling);
console.log(sister);

console.log("<Function>");

let family_1 = () => {
    var names1 = "Anbu "
    let sibling1 = "Dharshini A"
    const sister1 = "Lavan "

    console.log(names1);
    console.log(sibling1);
    console.log(sister1);



    if (true) {
        console.log(names1);
        console.log(sibling1);
        console.log(sister1);
    }


}
family_1()

console.log("<Block>");

let family2 = () => {


    if (true) {
        var names2 = "priya "
        let sibling2 = " A Dharshini "
        const sister2 = "A Lavan "
        console.log(names2);
        console.log(sibling2);
        console.log(sister2);
    }

    console.log(names2);
    
}
family2()

console.log("Write a program to demonstrate the different behavior of var, let, const, and a function declaration when they are accessed before their declaration/initialization.");

console.log(number);
console.log(num);
console.log(n);
var number =20
let num = 30 
const  n = 70











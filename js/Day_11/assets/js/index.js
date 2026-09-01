console.log("Task 3 — Push and Pop");
let array=["apple", "banana", "cherry"];
console.log("Initial array:", array);
array.push("Grapes");
console.log("After push:", array);
array.pop();
console.log("After pop:", array);

console.log("Task 4 — Shift and Unshift");
let array1=["apple", "banana", "cherry"];
let shift=array1.shift();
console.log("After shift:", array1);
array1.unshift("Date");
console.log("After unshift:", array1);


console.log("Task 5 — Manual Push Without push()");
const numbers = [10, 20, 30];
let resut=[]
for (let i = 0; i < numbers.length; i++) {
    resut[resut.length]=numbers[i]
}
resut[resut.length]=40;
console.log(resut);

console.log("Task 6 — Array Methods Until concat()");

const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

const combine =fruits.concat(vegetables);
console.log(combine);
combine.pop();
combine .push("Banana");
console.log(combine);
combine.shift();
combine.unshift("grapes");
console.log(combine);
let length=combine.length;
console.log("Length of the array:", length);


console.log("Create a closure function named createCounter.");

const createCounter = () => {

    let count = 0;

    return () => {
        count++;
        return count;
    };
};

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

console.log("Task 1 — Simple Callback Function")

let num =()=>{
    console.log("This is a simple callback function.");
    
    // callback();
}
let process=(callback)=>{
    console.log("Processing...");
    callback();
}
console.log(num(process))



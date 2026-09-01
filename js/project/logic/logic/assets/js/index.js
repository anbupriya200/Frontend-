console.log("1) Positive, Negative, or Zero");

let number = 8;
if (number < 0) {
  console.log("Negative number ");
} else {
  console.log(" Positive number ");
}

console.log("2)Find the Largest of Three Numbers");

let a1 = 56;
let a2 = 90;
let a3 = 89;
if (a1 > a2) {
  console.log(" the a1 value larger ");
}
if (a2 > a3) {
  console.log("The a2 value thhe larger number ");
} else {
  console.log(" The a3 value islarger number ");
}

console.log("3)Count Even Numbers");

let numbers = [10, 15, 20, 25, 30, 35];

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}

console.log("4)Find the Sum of Digits");

let value = 12345;
let sum = 0;

let numberString = String(value);

for (let i = 0; i < numberString.length; i++) {
  sum = sum + Number(numberString[i]);
}

console.log(sum);

console.log("5) Find the sum of number in array");

let num = [10, 20, 10, 30, 20, 40];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
  sum1 += num[i];
}
console.log(sum1);

console.log("6)Find whether a number is prime");
let prime = 50;
let counter = 0;
for (let i = 1; i <= prime; i++) {
  if (prime % i == 0) {
    counter++;
  }
  console.log(prime);
}
if (counter == 2) {
  console.log("prime");
} else {
  console.log(" Not a prime");
}

console.log("7)Find common elements in two arrays");

let a = [10, 20, 60, 40];
let b = [20, 40, 50, 60];
for (let i = 0; i <= a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log(a[i]);
    }
  }
}


console.log("8)Find how many times a particular value occurs");
let arr = [10, 20, 10, 30, 10, 40];
let target = 10;
countnum=0

for (let i=1; i<arr.length;i++){
    if (arr[i]==target){
        countnum++;
    }
    
}
 console.log(countnum);

 
console.log("Count vowels");

 let text = "javascript";
 let count = 0;

 for (let i = 0; i < text.length; i++) {
   if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
     count++;
   }
 }

 console.log(count);

 

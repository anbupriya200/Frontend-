console.log("Using a for loop, print numbers from 1 to 10.");

for( let i=0; i<=10; i++ ){
    console.log(i);
    
}


console.log("Using a for loop, print all even numbers from 1 to 20.");
for( let i=0; i<=20; i++ ){
    if(i%2==0){
        console.log(i);
    }
}

console.log("Using a for loop, print all odd numbers from 1 to 20.");


for( let i=0; i<=20; i++ ){
    if(i%2==1){
        console.log(i);
    }
}

console.log("Using a for loop, print the multiplication table of 5.");


let number = 5;
for( let i=0; i<=10; i++ ){
    console.log(number,"*",i, "=",i*5);
    
}


console.log("SUM OF NUMBERS");

let sum=0
for( let i=0; i<=10; i++ ){
    sum+=i    
}
console.log(sum);


console.log("print the Number");

for( let i=10; i>=0; i-- ){
    console.log(i);
    
}
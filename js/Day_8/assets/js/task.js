console.log(" Create an array of 5 numbers. Use a for loop to print all the numbers.");

let number =[1,2,3,4,5,6]
for (i=0;i<=number.length-1;i++){
    console.log(number[i]);
    
}

console.log(" Create an array of 5 student names. Use a for loop to print each name on a separate line.");


let student =["Anbu","priya","Lakshmi","Lavan","Dharshini"]
for (i=0;i<=student.length-1;i++){
    console.log(student[i]);
    
}

console.log("Create an array of numbers. Use a for loop to find and print only the even numbers.");

let number_1 =[1,2,3,4,5,6]
for (i=0;i<=number_1 .length-1;i++){
    if(number_1 [i]%2==0){
        console.log(number_1 [i]);
    }
    
}

console.log(" Create an array of student objects containing name and mark. Use a for loop to print the names of students who scored more than 80");

let student_1 =[{name:"Anbu",mark:90},{name:"priya",mark:98},{name:"Lakshmi",mark:80},{name:"Lavan",mark:78},{name:"Dharshini",mark:93}]
for (i=0;i<=student_1.length-1;i++){
    if(student_1[i].mark>90 ){
        console.log(student_1[i]);
        
    }
    
    
}

console.log(" Create an arrow function that accepts two numbers as parameters and returns their sum");
let sum=(a,b)=>{
    return a+b
    
}
console.log(sum(4,9));


console.log(" Create an arrow function that accepts a student's name and mark as parameters and returns a message containing the student's name and mark.");
let stud=(name,mark)=>{
    console.log("name:", name,"mark:",mark);
    
}
stud("priya",98)

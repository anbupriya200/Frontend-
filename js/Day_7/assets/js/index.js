console.log("Given an array of 5 fruit names, use a for loop to print each fruit on a separate line.");

let fruit=["Apple","Banana","Grapes","Pears","Mango"] 
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

console.log("Create a student object with name, age, course, and mark. Access and print each property individually.");


let Student={name:"Priya",age:21,course:"FS",mark:99}
console.log(Student.name);
console.log(Student.age);
console.log(Student.course);
console.log(Student.mark);

console.log("Create an array containing 3 student objects. Use a for loop to print each student's name and mark.");

let Student_1=[{name:"priya",mark:98}, {name:"lavanya",mark:94},{name:"Diva",mark:100}]
for (let i = 0; i < Student_1.length; i++) {
    console.log(Student_1[i]);
}

console.log("Given an array of student objects, use a for loop and if condition to find a student by name and print the student's name and mark.");

let Student_2=[{name:"priya",mark:98}, {name:"lavanya",mark:94},{name:"Diva",mark:100}]
let target="priya"
for (let i = 0; i < Student_2.length; i++) {
    if(Student_2[i].name==target){
        console.log(Student_2[i]);
        break
    }
  
}

console.log("Given an array of employee objects, use a for loop and if condition to print employees whose salary is greater than ₹40,000.");

let employee =[{name:"kumar",salary:45000},{name:"karthi",salary:35000},{name:"Diva",salary:30000}]
for (let i = 0; i < employee.length; i++) {
    if(employee[i].salary>40000){
        console.log(employee[i]);
        break
    }
  
}

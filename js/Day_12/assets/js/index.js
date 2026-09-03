console.log("Create an array of 5 numbers. Add 3 new numbers to the end using push() and display the final array.");

let values =[1,2,3,4,5]
values.push(6,7,8)
let number =values.push(9,10)
console.log(" final array:",values)
console.log(" number of elements added:",number)


console.log("Create an array containing 6 fruits. Remove the last 2 fruits using pop() and display the removed values and final array.");
let fruit =["apple","banana","orange","grapes","watermelon","peach"]
let removed=fruit.pop()
fruit.pop()
fruit.pop()
console.log("Removed values:",removed)
console.log("Final array:",fruit)

console.log("Create an array of 5 city names. Remove the first city using shift(), then add a new city at the beginning using unshift().");
let cities =["seoul","Bangkok","Tokyo","villupuram","chennai" ]
let removedCity = cities.shift()
console.log("Removed city:",removedCity)
cities.shift()
console.log("Final array of cities:",cities)
cities.unshift("New York")
console.log("Final array of cities:",cities)

console.log("Create an array of 5 student names. Use forEach() to print each student's name along with their position number.");
let student = ["priya","Anbu","Diva","lavanya","Dharshini"]
student.forEach((e,i) =>{
    console.log(`${i}: ${e}`);
    
})

console.log("  method 2");
let student1 = ["priya","Anbu","Diva","lavanya","Dharshini"]
let binn = student.forEach((e,i) =>{
    console.log(i+1 +":"+e);
    
})


console.log("Task 5 — map()");

let counts = [10, 20, 30, 40, 50]
let newcount = counts.map((e) =>   {
    return e * 2
})
console.log(newcount);







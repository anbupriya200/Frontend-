console.log("TASK 1 – AGE CHECK");
let user_age = 14;
if (user_age > 18) {
    console.log("Eligible");

}
else {
    console.log("Not Eligible");

}

console.log("TASK 2 – EVEN OR ODD");
let user_nubmer = 15;
if (user_nubmer % 2 == 0) {
    console.log(Even);

}
else {
    console.log("Odd");

}

console.log("TASK 3 – MARK GRADE");
let user_mark = 99
if (user_mark=(100<=90)) {
    console.log("A+");

}
else if ((89 <= 75)) {
    console.log("A");

}
else if ((74 <= 50)) {
    console.log("B");

}
else if ((49 <= 35)) {
    console.log("C");

}
else {
    console.log("FAIL");

}

console.log("TASK 4 – LOGIN CHECK");

let username = "admin 4";
let password = "1234";
if (username = "admin") {
    console.log("Login Success");
    if (password = "1234") {
        console.log("Login Success");

    }
}
else {
    console.log("Invalid Login");

}

console.log("TASK 5 – DAY CHECK");

let day = 7;
 
switch (day) {
    case 1:
        day="Monday";
        
        break;

    case 2:
        day="Tuesday";
        
        break;   
        
     case 3:
        day="Wednesday";
        
        break;  
        
         case 4:
        day="Thursday";
        
        break; 

         case 5:
        day="Friday";
        
        break; 

         case 6:
        day="Saturday";
        
        break; 

         case 7:
        day="Sunday";
        
        break; 

    default:
        break;
}
console.log(day);



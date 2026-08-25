console.log("1 முதல் 20 வரை numbers-ஐ single line-ல் print செய்யவும்.");
let result = "";
for(let a=1; a<=20; a++ ){
      result = result + a + " ";
    
}
console.log(result);

console.log("1 முதல் 50 வரை உள்ள even numbers-ஐ single line-ல் print செய்யவும்.");

let result_1 = "";
for(let a=1; a<=50; a++ ){
    if(a%2==0) {
        result_1 = result_1 + a + " ";
    }
    
}
console.log(result_1);

console.log("1 முதல் 50 வரை உள்ள odd numbers-ஐ single line-ல் print செய்யவும்.");

let result_2 = "";
for(let a=1; a<=50; a++ ){
    if(a%2==1) {
        result_2 = result_2 + a + " ";
    }
    
}
console.log(result_2);

console.log("1 முதல் 20 வரை உள்ள அனைத்து numbers-ன் sum கண்டுபிடிக்கவும்.");

let Sum = 0;
for(let a=1; a<=20; a++ ){
      Sum +=a ;
    
}
console.log(Sum);

console.log("1 முதல் 50 வரை உள்ள even numbers-ன் sum கண்டுபிடிக்கவும்.");

let Sum_1 = 0;
for(let a=1; a<=50; a++ ){
    if(a%2==0) {
      Sum_1 +=a ;
    }
}
console.log(Sum_1);

console.log("1 முதல் 100 வரை எத்தனை even numbers இருக்கிறது என்று count செய்யவும்.");

let Sum_2 = 0;
for(let a=1; a<=100; a++ ){
    if(a%2==0) {
      Sum_2++;
    }
    
}
console.log(Sum_2);

console.log("1 முதல் 100 வரை loop செய்து, 73 என்ற number கிடைத்தவுடன் print செய்து loop-ஐ stop செய்யவும்.");

let result_5 = "";
for(let a=1; a<=100; a++ ){
    if(a==73) {
        break;
    }
    result_5 = result_5 + a + " ";   
} 
console.log(result_5);

console.log("Reverse Number");

let number = 12345;


console.log( "Reverse String");
let text = "javascript";
let output=" "
for( let i=text.length-1; i>=0; i--){
     output +=text[i]
}
console.log(output);


console.log("for loop பயன்படுத்தி target character இருக்கிறதா என்று கண்டுபிடிக்கவும்.");
let text_1 = "javascript";
let target = "s";
for(let i=0; i < text_1.length; i++ ){
    if(text_1[i] === target){
        console.log("Found :" ,target);
        break
        
    }
}





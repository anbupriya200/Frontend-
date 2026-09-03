let element = document.getElementById("tittle");
let para = document.querySelectorAll("p");
element.addEventListener("click", () => {

    element.textContent = "Welcome to the page";

    // let para = document.querySelectorAll("p");
    para[0].textContent = "This is a paragraph";
    para[1].textContent = "This is another paragraph";
    para[2].textContent = "This is yet another paragraph";
    para[3].textContent = "This is the last paragraph";
})
//  console.log(element);

//  element.textContent = "Welcome to the page";

// let para =document.querySelectorAll("p");
// console.log(para);
// para[0].textContent = "This is a paragraph";
// para[1].textContent = "This is another paragraph";
// para[2].textContent = "This is yet another paragraph";
// para[3].textContent = "This is the last paragraph";



const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    btntittle.textContent = "Loading";
    btn.classList.add("button1");

})



    

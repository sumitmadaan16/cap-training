//? DOM --> Document Object Model

console.log(window);
console.log("Hello");
window.console.log("HII");

console.log(document);
console.log(document.body);
console.log(document.title);

console.log(document.body.childNodes); //gives node list that contains all the thing like tags text etc.
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[2]);

console.log(document.body.children) // gives htmlCollections 
console.log(document.body.children[2]); // gives element --> <tag>data</tag> together is called element

// both htmlCollections and nodeList are an type of array but these can not be modified these can only be used to access elements


//! to access parent from children parent -> child
let btn1 = document.body.children[2];
console.log(btn1.parentElement);
console.log(btn1.parentNode);


//! used to access without indexing
let div1 = document.body.children[3];
console.log(div1.firstElementChild); 
console.log(div1.lastElementChild);

//! getting next sibbling
console.log(btn1.nextElementSibling);

let heading1 = div1.firstElementChild
console.log(heading1.nextElementSibling);

//! getting previous sibbling
let heading4 = div1.lastElementChild
console.log(heading4.previousElementSibling);


//!  dom direct access methods
//? get element by Id
// --> returns only first child
let h1 = document.getElementById("h1");
console.log(h1);
let btn = document.getElementById("btn1");
console.log(btn1);

//! get element by class name

let getByClass = document.getElementsByClassName("h44")
console.log(getByClass); //? gives html collection


let convertedarray = Array.from(getByClass) // converts the array "getByClass" to normal array which can be accesed and modified
console.log(convertedarray);

convertedarray.map((ele) => {
    ele.style.color="antiqueWhite"
    ele.style.backgroundColor= "#323232"
    ele.style.padding="10px"
    ele.style.width="9%"
    ele.style.borderRadius="10px"
})

//! getElements by Name
//? only method that gives NodeList 
let btnName = document.getElementsByName("button1")
console.log(btnName)

// Query Selector

//? gives an single element
let h12 = document.querySelector(".h44")
console.log(h12); 

//? gives node list
let h13 = document.querySelectorAll(".h44")
console.log(h13); 


//! create element
let img1 = document.createElement("img")
console.log(img1);
//! add attribute
img1.setAttribute("src" , "./bg.jpg");
document.body.append(img1)
//! removeAttribute
img1.removeAttribute("src")

let h11 = document.createElement("h1");
h11.innerText="hi this is from dom createElement";

document.body.append(h11);

//! event handling
// inlne 
function demoAlert(){
    alert("button clicked");
};

// from js

let btnAlert = document.getElementById("btn2");
btnAlert.onclick = function demoAlert2(){
    alert("button2 clickedddddddd")
}

//! addeventListner
// element.addeventListner("event" , callback function)

let btn3 = document.getElementById("btn3")
let state = false
btn3.addEventListener("click", () => {
    if (state === false) {
        state = true;
        document.body.style.backgroundColor = "antiquewhite";
        document.body.style.color = "#323232";
        let headings = document.getElementsByClassName("h44");
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.backgroundColor = "#323232";
            headings[i].style.color="antiquewhite"
        }
    } else {
        state = false;
        document.body.style.backgroundColor = "#323232";
        document.body.style.color = "white";
        let headings = document.getElementsByClassName("h44");
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.backgroundColor = "antiquewhite";
            headings[i].style.color="#323232"
        }
    }
});


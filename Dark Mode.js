// Selecting all the required elements using queryselector
const fas = document.querySelector(".fas");
const firstdiv = document.querySelector(".firstdiv");
const seconddiv = document.querySelector(".seconddiv");
const maindiv = document.querySelector(".main-container");
const logo = document.querySelector(".logo");
const img = document.querySelector(".img");


// Creating a array of the above mentioned elements to target multiple elements
const arrC = [maindiv,firstdiv,seconddiv];
//OnClick event on the icon
fas.addEventListener("click",()=>{
    // for in doesn't work
    for(elements of arrC){
        // Using the toggle event and adding class from css using classLsit.add
        elements.classList.toggle("change");
    }
    fas.classList.toggle("move");
    logo.classList.toggle("clr");
});
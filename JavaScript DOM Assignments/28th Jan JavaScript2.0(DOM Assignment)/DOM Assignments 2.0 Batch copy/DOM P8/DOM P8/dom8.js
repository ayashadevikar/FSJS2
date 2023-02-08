document.querySelector(".navbar-brand").innerHTML = "";
// document.querySelector(".navbar-nav").innerHTML = "";


document.querySelector(".col-lg-4").style.border = "3px solid red";


let list = document.querySelector("aside");
let newscrollbar = document.querySelector(".new");
newscrollbar.style.overflowY = "scroll";
let aside = document.querySelector(".hr-line");
list.appendChild(aside);

let heading = document.querySelector(".new-head");
heading.innerHTML = "This is my custom heading";
list.appendChild(heading);

// task 2
let bgc = document.querySelector("body");
bgc.style.background = "#fff";

// task 3
let navbartogglebutton = document.querySelector(".navbar-toggler");
navbartogglebutton.addEventListener("click", function(){
   document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
     })
// task 1

let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";
 // let li = document.createElement("li");
    // li.innerHTML="<a>Hire Me</a>";
    // let list = document.querySelector("header nav ul");
    // list.appendChild(li);
    //  let footer = document.querySelector("footer ul");
    //  footer.style.visibility = "hidden";

// task 2

//  document.querySelector("input").placeholder = "Search My Project";

// task 3

// let element = document.querySelectorAll(".hero-left-section p span");
// element[1].innerText = "an Employee";
// element[2].innerText = "iNeuron Intelligence Pvt Ltd.";


// task 4
let image = document.querySelector("img");
image.src = "./hiteshsir.jpg"


// task 5

let btn = document.createElement("button");
btn.innerHTML = "Support Me";
let newbtn = document.querySelector(".hero-right-section-btns");
newbtn.appendChild(btn);
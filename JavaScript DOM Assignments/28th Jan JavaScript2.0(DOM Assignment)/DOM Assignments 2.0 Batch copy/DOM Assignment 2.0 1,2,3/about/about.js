let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// task1

let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";
let nodeList = document.querySelectorAll("h3");
for (let i = 0; i < nodeList.length; i++){
  nodeList[i].style.backgroundColor = "#dadaf8";
}

// task 2

let element = document.querySelector(".accordian-wrapper");
let div = document.createElement("div");
div.classList.add("accordian");
element.appendChild(div);

let newheading = document.createElement("h3");
newheading.innerHTML = "Skills";
newheading.style.backgroundColor = "#dadaf8";
div.appendChild(newheading);

let paragraph = document.createElement("p");
paragraph.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
div.appendChild(paragraph);

let lastaccordian = document.querySelectorAll(".accordian:last-child h3");
lastaccordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



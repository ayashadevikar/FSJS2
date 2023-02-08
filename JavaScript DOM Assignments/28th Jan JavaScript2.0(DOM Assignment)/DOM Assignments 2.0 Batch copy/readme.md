# DOM Assignment 1

**Task 1** 

Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove fotter social icons.

 ![Task1 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

**Solution**

  // change Contact to Projects

    let ul = document.querySelector("ul");
    ul.lastElementChild.innerHTML = "Projects";

  // add Hire Me

    let li = document.createElement("li");
    li.innerHTML="<a>Hire Me</a>";
    let list = document.querySelector("header nav ul");
    list.appendChild(li);

   // remove footer social icons

    let footer = document.querySelector("footer ul");
    footer.style.visibility = "hidden";

**Task 2** 

Change input placeholder text to "Search My Project"

![Task2 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

**Solution**

document.querySelector("input").placeholder = "Search My Project";
  
**Task 3**

Change span text and display footer social icons

![Task3 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

**Solution**

// change span text 

  let element = document.querySelectorAll(".hero-left-section p span");
  element[1].innerText = "an Employee";
  element[2].innerText = "iNeuron Intelligence Pvt Ltd.";

// display footer social icons

  let footer = document.querySelector("footer ul");
  footer.style.visibility = "visible";

**Task 4**

Change hero avtar image 

![Task4 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

**Solution**

let image = document.querySelector("img");
image.src = "./hiteshsir.jpg"

**Task 5**

Add "Support Me" Button

![Task5 Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

**Solution**

let btn = document.createElement("button");
btn.innerHTML = "Support Me";
let newbtn = document.querySelector(".hero-right-section-btns");
newbtn.appendChild(btn);

# DOM Assignment 2

change all h3 background color and change contact navigation menu to "Projects"

**Task 1**
// change all h3 background color and change contact navigation menu to "Projects"

![Task1 Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

**Solution**

// change all h3 background color
let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";
let nodeList = document.querySelectorAll("h3");
for (let i = 0; i < nodeList.length; i++){
  nodeList[i].style.backgroundColor = "#dadaf8";
}

// change contact navigation menu to "Projects"

let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";

**Task 2**

// Add h3 with new name "Skills" and also add new paragraph

![Task2](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

**Solution**

let element = document.querySelector(".accordian-wrapper");
let div = document.createElement("div");
div.classList.add("accordian");
element.appendChild(div);

// add new h3 "Skills"

let newheading = document.createElement("h3");
newheading.innerHTML = "Skills";
newheading.style.backgroundColor = "#dadaf8";
div.appendChild(newheading);

// add new paragraph

let paragraph = document.createElement("p");
paragraph.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
div.appendChild(paragraph);

// add click function on new h3 

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

# DOM Assignment 3

**Task 1**

document.querySelector(".enterName").placeholder = "FSJS 2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";

**Task 2**

document.querySelector(".userName").placeholder = "FSJS 2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";
# DOM Assignment 6

**Task 1**

![Task6](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

document.querySelector(".logo").src = "./assets/ineuron-logo.png";

document.querySelector(".app_price > span").innerHTML = "$10";


![Task6](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)


**Solution**

let socialmedia = document.querySelector(".footer_social");
let div = document.createElement("div");
div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
socialmedia.appendChild(div);

# DOM Assignment 7

**Task 1**

![Task7](./DOM%20P7/DOM%20P7/ass7.1-after.png)

**Solution**

let course = document.querySelectorAll(".main__languages a");
for(let i= 0; i < course.length; i++){
    if(course[i].innerHTML.includes("2.0")){
    course[i].style.display = "none";
}
}
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

**Task**

Change placeholder values 

![Task 1 Image](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

**Solution**

// user output board

document.querySelector(".enterName").placeholder = "FSJS 2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";

// user input board

document.querySelector(".userName").placeholder = "FSJS 2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";

# DOM Assignment 4

**Task**

Chnage background color and text color at the bottom of the cards and change character names

![Task](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

**Solution**

// change character names

document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";
document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";

// change background color at the bottom of the cards

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";

// change text color at the bottom of the cards 

document.querySelectorAll(".clash-card__unit-stats").forEach((e) => {e.style.color = "#fff"});
document.querySelectorAll(".no-border").forEach((e) => {e.style.color = "#fff"});

# DOM Assignment 5

**Task**

Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card 

![Task 1](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

**Solution**

// Add "Pro Subscription" button
 
let newbtn = document.createElement("a");
newbtn.classList.add("btn");
newbtn.innerHTML = "Pro Subscription";
document.querySelector(".btn").parentElement.appendChild(newbtn);

// add new recipe "Chinese (7)"

let list = document.createElement("a");
list.innerHTML = "Chinese (7)";
let recipe = document.querySelector(".tags-container div").appendChild(list);

// change h5 and p tags color

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2"});
document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2"});

// add 6th card 

let card = document.querySelector(".recipe-gallery");
let newCard = document.createElement("div");
newCard.classList.add("card");
card.appendChild(newCard);

let selectcard = document.querySelector(".card:last-child");
let cardImage = document.createElement("img");
cardImage.src = "./img/recipe-5.jpeg";
cardImage.classList.add("recipe-img");
selectcard.appendChild(cardImage);


let heading = document.createElement("h5");
heading.textContent = "Ice-Cream";
heading.classList.add("recipe-name");
selectcard.appendChild(heading);


let paragraph = document.createElement("p");
paragraph.textContent = "Prep : 15min | Cook : 30min";
paragraph.classList.add("recipe-disp");
selectcard.appendChild(paragraph);

# DOM Assignment 6

Add Ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer

**Task 1**

Add Ineuron logo

![Task6](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

**Solution**

document.querySelector(".logo").src = "./assets/ineuron-logo.png";

**Task 2**

change price to $10/month and add "linkedin" font awesome icon at end of the footer

![Task6](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

**Solution**

// change price to $10/month 

document.querySelector(".app_price > span").innerHTML = "$10";

// add "linkedin" font awesome icon at end of the footer

let socialmedia = document.querySelector(".footer_social");
let div = document.createElement("div");
div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
socialmedia.appendChild(div);

# DOM Assignment 7

Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

**Task 1**

Remove the languages that have 2.0 in their name 

![Task7](./DOM%20P7/DOM%20P7/ass7.1-after.png)

**Solution**

let course = document.querySelectorAll(".main__languages a");
for(let i= 0; i < course.length; i++){
    if(course[i].innerHTML.includes("2.0")){
    course[i].style.display = "none";
}
}

**Task 2**

Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

![Task 2](./DOM%20P7/DOM%20P7/ass7.2-after.png)

**Solution**

let inputBox = document.querySelector(".main__form-input");
inputBox.disabled = false;

let submitBtn = document.querySelector(".main__form-btn");
submitBtn .disabled = false;

submitBtn.addEventListener("click",(event) =>{

for(let i= 0; i < course.length; i++){
    
        if(course[i].innerHTML.includes("2.0")){
           course[i].style.display = "inline";
           
        } 

    }  
    });

# DOM Assignment 8

Remove navbar add horizontal line and p tag then add red color border to the div and add vertical scrollbar then add background color to white and add responsive navbar toggle button

**Task 1**

Remove navbar and add horizontal line and h3 tag then add red color border to the div and add vertical scrollbar

![Task1](./DOM%20P8/DOM%20P8/ass8.1-after.png)

**Solution**

// remove navbar 

document.querySelector(".navbar-brand").innerHTML = "";
document.querySelector(".navbar-nav").innerHTML = "";

// add red color border to the div

document.querySelector(".col-lg-4").style.border = "3px solid red";

// add vertical scrollbar 

let list = document.querySelector("aside");
let newscrollbar = document.querySelector(".new");
newscrollbar.style.overflowY = "scroll";

// add horizontal line

let aside = document.querySelector(".hr-line");
aside.overflow = "auto";
list.appendChild(aside);

// add h3

let heading = document.querySelector(".new-head");
heading.innerHTML = "This is my custom heading";
list.appendChild(heading);

**Task 2**

add background color to white

![Task2](./DOM%20P8/DOM%20P8/ass8.2-after.png)

**Solution**

let bgc = document.querySelector("body");
bgc.style.background = "#fff";

**Task 3**

add responsive navbar toggle button

![Task3](./DOM%20P8/DOM%20P8/ass8.3-after.png)

**Solution**

let navbartogglebutton = document.querySelector(".navbar-toggler");
navbartogglebutton.addEventListener("click", function(){
   document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
     })

# DOM Assignment 9

Chnage h3 color and change button color when mouse over 

**Task 1**

change h3 color

![Task1](./DOM%20P9/DOM%20P9/ass9.1-after.png)

**Solution**

document.querySelector(".caption .title").style.color = "#dc143c";

**Task 2**

change button color when mouse over 

![Task2](./DOM%20P9/DOM%20P9/ass9.2-after.png)

**Solution**

let test = document.querySelector(".add-to-cart");
test.addEventListener("mouseover",() => {  
test.style.backgroundColor = "#da123a";
})
test.addEventListener("mouseout",() => {  
test.style.backgroundColor = "hsl(158, 36%, 37%)";
})


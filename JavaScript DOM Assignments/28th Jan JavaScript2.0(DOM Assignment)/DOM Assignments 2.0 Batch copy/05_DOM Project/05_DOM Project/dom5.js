let newbtn = document.createElement("a");
newbtn.classList.add("btn");
newbtn.innerHTML = "Pro Subscription";
document.querySelector(".btn").parentElement.appendChild(newbtn);

let list = document.createElement("a");
list.innerHTML = "Chinese (7)";
let recipe = document.querySelector(".tags-container div").appendChild(list);

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2"});
document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2"});

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




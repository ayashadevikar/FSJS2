// task 1

document.querySelector(".logo").src = "./assets/ineuron-logo.png";

// task 2
 document.querySelector(".app_price > span").innerHTML = "$10";

 // task 3
 let socialmedia = document.querySelector(".footer_social");
 let div = document.createElement("div");
 div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
 socialmedia.appendChild(div);
 
// Task 1

let course = document.querySelectorAll(".main__languages a");
for(let i= 0; i < course.length; i++){
    if(course[i].innerHTML.includes("2.0")){
    course[i].style.display = "none";
}
}


// Task 2

 let inputBox = document.querySelector(".main__form-input");
 inputBox.disabled = false;

let button = document.querySelector(".main__form-btn");
button.disabled = false;

let list =  document.querySelector(".main__languages");

localStorage.setItem("key","iNeuron");


button.addEventListener("click",(event) =>
{
    event.preventDefault();
   document.querySelector(".main__languages a").innerHTML = localStorage.getItem("key");
});

















// for(let i= 0; i < course.length; i++){
    
//     if(course[i].innerHTML.includes("2.0")){
//        course[i].style.display = "inline";
       
//     } 
//    }  



  



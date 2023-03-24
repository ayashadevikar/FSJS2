
let body = document.querySelector("body");
document.addEventListener("click", element) 
   function element(event){
     let div = document.createElement("div")
     div.classList.add("circle")
     body.appendChild(div)
     div.style.left = event.clientX-10 + "px"
     div.style.top = event.clientY-10 + "px"
     const colors = ["#6A1B4D", "#E83A59", "#B4161B", "#51E1ED", "#E1A2B8","#00D84A","#FF6666","#E8BD0D","#A77B06","#758283","#8D3DAF","#0D0D0D","#CAD5E2","#E07C24"];
     div.style.backgroundColor = `${colors[Math.floor(Math.random() * 14)]}`;
   setTimeout( () => {
           circle.style.transform = "scale(1)";
     }, 50 )

     setTimeout( () => {
        div.style.transform = "scale()";
     }, 10);

     setTimeout( () => {
        body.removeChild(div);
     }, 2000);
    // console.log(event.clientX,event.clientY)
        
}





// Open and Close Menu

let menuEl = document.getElementById("menu-btn");
let closeEl = document.getElementById("close-btn");
let navEl = document.querySelector(".mobile-nav");

menuEl.addEventListener("click", ()=>{
    navEl.style.display = "block"; 
    menuEl.style.display ="none" ;
    closeEl.style.display ="block"; 
})

closeEl.addEventListener("click", ()=>{
    navEl.style.display = "none";
    menuEl.style.display ="block" ;
    closeEl.style.display ="none"; 
})

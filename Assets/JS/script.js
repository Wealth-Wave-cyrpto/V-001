
const passWord = document.querySelector(".password");
const showPass = document.querySelector("#show");
const loginEl = document.querySelector(".submit");

// Show password
showPass.addEventListener('input', (e) => {
    e.preventDefault();

    if (passWord.type === "password") {
        passWord.type = "text";

    }
    else {
        passWord.type = "password";
    }
});



// login

loginEl.addEventListener("click", ()=>{
    
    window.location ="dashboard/index.html";
})
 

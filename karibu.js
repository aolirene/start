let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
let email = id("email");
let password = id("password");
let form = id("form");
let errorMsg = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes(" failure-icon")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
engine(email, 1, "Email cannot be blank");
engine(username, 0, "Username cannot be blank");
engine(password, 2, "Password cannot be blank");
    
});

let engine = (id, serial,message) => {
    if(id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else{ 
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }

};
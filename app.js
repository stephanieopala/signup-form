const form = document.getElementById("myForm");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const icons = document.querySelectorAll(".form__icon");
const errorMsg = document.querySelectorAll(".form__error");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formValidate(); 
});

function formValidate() {
    
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue === "") {
        firstname.classList.add("error");
        errorMsg[0].style.display = "block";
        errorMsg[0].innerText = "First Name cannot be empty";
        icons[0].style.display = "flex";
    } 

    if(lastnameValue === "") {
        lastname.classList.add("error");
        errorMsg[1].style.display = "block";
        errorMsg[1].innerText = "Last Name cannot be empty";
        icons[1].style.display = "flex";
    }

    if(emailValue === "") {
        email.classList.add("error");
        errorMsg[2].style.display = "block";
        errorMsg[2].innerText = "Email cannot be empty";
        icons[2].style.display = "flex";

    } 

    if(passwordValue === "") {
        password.classList.add("error");
        errorMsg[3].style.display = "block";
        errorMsg[3].innerText = "Password cannot be empty";
        icons[3].style.display = "flex";
    }
    else {
        return true;
    }
   
}

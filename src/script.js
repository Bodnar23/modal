// "use strict";

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#loginForm");

//     document.querySelector("#linkLogin").addEventListener("click", () => {
//         loginForm.classList.add();
//         createAccountForm.classList.remove();
//     });
// });

//зарегестрированные пользователи которые могут быть авторизованными
// const correctUsers = [
//     { login: "alex@mail.com", password: "alex1998" },
//     { login: "ekaterins@mail.com", password: "ekaterina1990" },
//     { login: "ivan@mail.com", password: "ivan1993" }
// ]

// let foundUser;

// //поиск пользователя в массиве
// for (let i = 0; i < correctUsers.length; i++) {
//     let c = correctUsers[i];
//     if(c.login == login && c.password == password) {
//         foundUser = c.login;
//         break;
//     } 
// }

// if (foundUser !== undefined) {
//     console.log("login success")
// } else {
//     console.log("Login error")
// }

// function getInfo() {
//     let login = document.getElementsById("login").value
//     let password = document.getElementById("password").value

//     for (let i = 0; i < correctUsers.length; i++) {
//         if(login[i] == correctUsers.login && password[i] == correctUsers.password) {
//             console.log(login + "is logged in!!!")
//         } else {
//             console.log("incorrect login or password")
//         }
//     }
// }

// const modal = () => {
//     function 
// }

const user = {login: "correct@mail.com", password: "correctpass"};

const button = document.querySelector("button");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const modal_conteiner = document.querySelector(".modal_conteiner");
const login_conteiner = document.querySelector(".login_content");
const container = document.querySelector(".container");
const successLoginContainer = document.querySelector("#successLoginContainer");

const checkLoginField = () => {
    const errorMessage = document.querySelector("#login_error_message");
    if (login.value.length < 8) {
        errorMessage.innerText = "Login must be at least 8 characters"
        login.classList.add("input-error");
         return false;
    } else if (login.value.length > 20){
        errorMessage.innerText = "Login must be less than 20 characters"
        login.classList.add("input-error");
         return false;
    } else return true
};

const checkPasswordField = () => {
    const errorMessage = document.querySelector("#password_error_message");
    if (password.value.length < 8) {
        errorMessage.innerText = "Password must be at least 8 characters"
        password.classList.add("input-error");
         return false;
    } else if (password.value.length > 20){
        errorMessage.innerText = "Password must be less than 20 characters"
        password.classList.add("input-error");
         return false;
    } else return true
};

button.onclick = function (e) {
    e.preventDefault();
    if (checkLoginField() && checkPasswordField()) {
        if (login.value != user.login) {
            alert('Incorrect login!')
        } else if (password.value != user.password) {
            alert('Incorrect password!')
        } else { 
            //SUCCESS LOGIN 
            login_conteiner.remove(".login_content");
            container.classList.toggle("hide");
            // successLoginContainer.style.display = "block";
            // modal_conteiner.classList.add(".successLogin");
            // e.preventDefault();

        }
    }  
    // if (login.value == 'correct@mail.com' && password.value == 'correct') {
    // // alert('Welcome');
    // }
    // else alert('Incorrect login or pass');
   
}

// modalClose.addEventListener('click', () => {
//     login_content.classList.add("successLogin");
//     login_content.classList.remove(".login_content");
// })

const button    = document.getElementById('log-btn')
const userInput = document.getElementById('username')
const passInput = document.getElementById('password')
const error = document.querySelector('.error')
error.style.color = "#fff"
error.style.textAlign = "center"
const singUpLink = document.getElementById('sing-up-link')
const logInLink = document.getElementById('log-in-link')
const loginContainer = document.querySelector('.login-container')
const singUpContainer = document.querySelector('.singUp-container')

singUpLink.addEventListener('click', () => {
    loginContainer.classList.add('login-container_disabled')
    singUpContainer.classList.remove('singUp-container_disabled')
})
logInLink.addEventListener('click', () => {
    loginContainer.classList.remove('login-container_disabled')
    singUpContainer.classList.add('singUp-container_disabled')
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(userInput.value === "" && passInput.value === "") {
        error.innerHTML = 'You must fill in the fields to log in'
    } else if(userInput.value === "Admin@mail.com" && passInput.value === "adminPassword") {
        error.innerHTML = 'You are logged in correctly'
    } else {
        error.innerHTML = 'The Email or Password is not correct'
    }
})


const button2    = document.getElementById('sup-btn')
const userInput2 = document.getElementById('username2')
const passInput2 = document.getElementById('password2')
const error2 = document.querySelector('.error2')
error2.style.color = "#fff"
error2.style.textAlign = "center"


button2.addEventListener('click', (e) => {
    e.preventDefault()
    if(userInput2.value === "" && passInput2.value === "") {
        error2.innerHTML = 'You must fill in the fields to log in'
    } else if(userInput.value === "Admin@mail.com" && passInput.value === "adminPassword") {
        error2.innerHTML = 'You are registered correctly'
    }
})


var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var alertMsg = document.getElementById("alertmassage");

var usersList = [];

if (localStorage.getItem("usersContainer") !== null) {
    usersList = JSON.parse(localStorage.getItem("usersContainer"))
}


// Login Button
function loginBtn() {
    if (checkEmptyInput() == true) {
        getAlertMassage("All Inputs Are Requred", "red")
    } else {
        if (validEmailPass() == true) {
            location.href = "../pages/home.html" 
        } else {
            getAlertMassage("incorrect email or password","red")
        }
    }
}

// Validation Email And Password.

function validEmailPass() {
    for (var i = 0; i < usersList.length; i++) {

        if (usersList[i].email == emailInput.value && usersList[i].password == passwordInput.value) {
            localStorage.setItem("userName", usersList[i].name)
            return true;
        }
    }
}

// Alert Massage .

function getAlertMassage(text,color) {
    alertMsg.innerHTML = text;
    alertMsg.classList.replace("d-none", "d-block");
    alertMsg.style.color = color;
}

function checkEmptyInput(text, color) {
    if (emailInput.value == "" || passwordInput.value == "") {
        return true
    } else {
        return false
    }
}
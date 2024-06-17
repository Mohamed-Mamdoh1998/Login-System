var userNameInput = document.getElementById("userNameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var alertMassege = document.getElementById("alertmsg");
var usersList = []
if (localStorage.getItem("usersContainer") !== null) {

    usersList = JSON.parse(localStorage.getItem("usersContainer"));
}

// Sign Up Button.
function signUp() {
    var user = {
        name: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    if (checkEmptyInput() == true) {

        alertMsg("All Inputs Are Requred", "red")

    } else {
        if (preventEmailreuse() == true) {
            alertMsg("Email Is Already Exists", "red")
        } else {
            usersList.push(user);
            localStorage.setItem("usersContainer", JSON.stringify(usersList));
            alertMsg("Success", "green");
            clearInputs()
        }

    }

    console.log(usersList);
};


// Clear Inputs After Sign Up.
function clearInputs() {
    userNameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
};

// Alert Massage After Validation
function alertMsg(text, color) {
    alertMassege.classList.replace("d-none", "d-block");
    alertMassege.innerHTML = text;
    alertMassege.style.color = color;
}
// Validation Inputs
function checkEmptyInput() {
    if (userNameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        return true
    } else {
        return false
    }
}

// Validation Email
function preventEmailreuse() {

    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email == emailInput.value) {
            return true
        }
    }

}
var welcomeMsg = document.getElementById("welcomeMsg");


if (localStorage.getItem("userName") !== null) {
    welcomeMsg.innerHTML = `Welcome ${(localStorage.getItem("userName"))}`
}

function logOutBtn() {
    window.location.href = "../pages/index.html";
    localStorage.removeItem("userName")
}
// Display a welcome message in the console
console.log("Welcome to our website!");

// Display a welcome message on the web page
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessageElement = document.getElementById("welcome-message");
    welcomeMessageElement.textContent = "Welcome to our website!";
});

// Welcome message when the website loads
window.addEventListener("load", function () {
console.log("Welcome to Indhu K's Portfolio!");
});

// Navigation click message
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
link.addEventListener("click", function () {
console.log("You clicked: " + link.textContent);
});
});

// Skills interaction
const skills = document.querySelectorAll(".skills-container span");

skills.forEach(function (skill) {
skill.addEventListener("click", function () {
alert("You selected: " + skill.textContent);
});
});

// Current year in footer
const year = new Date().getFullYear();
const footerText = document.querySelector("footer p");

if (footerText) {
footerText.textContent =
"© " + year + " Indhu K | B.Tech Information Technology";
}

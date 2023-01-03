// Show menu
const menu = document.getElementById("nav-menu");
const toggleButton = document.getElementById("nav-toggle");

console.log(menu, toggleButton);

if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("show-menu");
    });
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("show-menu");
    });
});

// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuIcon.classList.replace("ri-menu-line", "ri-close-line");
    } else {
        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    }
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    });
});

// Header shadow effect scrolled
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 20) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// Mensaje de Emoji
const catButton = document.getElementById("catButton");
const catMessage = document.getElementById("catMessage");

catButton.addEventListener("click", () => {
    if (
        catMessage.style.display === "none" ||
        catMessage.style.display === ""
    ) {
        catMessage.style.display = "block";
        catMessage.textContent = "¡Miau!";
        catButton.textContent = "😸";
        catMessage.classList.add("fade-in");
        catMessage.addEventListener(
            "animationend",
            () => {
                catMessage.classList.remove("fade-in");
            },
            { once: true }
        );
    } else {
        catMessage.style.display = "none";
    }
});

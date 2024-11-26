// JavaScript Document
// Toggle menu visibility
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.style.display = "none";
        }
    });
});

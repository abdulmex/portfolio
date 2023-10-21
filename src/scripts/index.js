"use strict";
// Theme toggle
const modeToggle = document.getElementById("mode-toggle");
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
let darkMode =
  localStorage.getItem("darkMode") || (prefersDarkMode ? "dark" : "light");

const applyMode = () => {
  document.body.classList.toggle("dark-mode", darkMode === "dark");
};
applyMode();
modeToggle.addEventListener("click", () => {
  darkMode = darkMode === "dark" ? "light" : "dark";
  applyMode();
  localStorage.setItem("darkMode", darkMode);
});
// Welcome project button
const scrollToProjectButton = document.getElementById("scrollToProject");
const projectSection = document.getElementById("project-section");
scrollToProjectButton.addEventListener("click", () => {
  window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: "smooth",
  });
});
// Welcome contact section
const scrollToAboutButton = document.getElementById("scrollToAbout");
const aboutSection = document.getElementById("about");
scrollToAboutButton.addEventListener("click", () => {
  window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: "smooth",
  });
});

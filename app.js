const welcomeSection = document.getElementById("welcome-section");
const aboutMe = document.getElementById("about-me");
const projectsBtn = document.getElementById("projects-btn");
const projects = document.getElementById("projects");
const contactInfo = document.getElementById("contact-info");

projectsBtn.addEventListener("click", event => {
    event.preventDefault();
    aboutMe.style.display = "none";
    projects.style.display = "block";
});

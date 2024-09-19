const logo = document.getElementById("logo");
const aboutMeNav = document.getElementById("about-me-nav");
const projectsNav = document.getElementById("projects-nav");
const skillsNav = document.getElementById("skills-nav");
const contactInfoNav = document.getElementById("contact-info-nav");

const welcomeSection = document.getElementById("welcome-section");
const frontPage = document.getElementById("front-page");
const aboutMeSection = document.getElementById("about-me");
const projectsSection = document.getElementById("projects");
const skillsSection = document.getElementById("skills");
const contactInfo = document.getElementById("contact-info");

const learnMoreBtn = document.getElementById("learn-more-btn");
const projectsBtn = document.getElementById("projects-btn");
const skillsBtn = document.getElementById("skills-btn");

aboutMeNav.addEventListener("click", event => {
    event.preventDefault();
    frontPage.style.display = "none";
    projectsSection.style.display = "none";
    skillsSection.style.display = "none";
    aboutMeSection.style.display = "block";
});

projectsNav.addEventListener("click", event => {
    event.preventDefault();
    frontPage.style.display = "none";
    skillsSection.style.display = "none";
    aboutMeSection.style.display = "none";
    projectsSection.style.display = "block";
});

skillsNav.addEventListener("click", event => {
    event.preventDefault();
    frontPage.style.display = "none";
    aboutMeSection.style.display = "none";
    projectsSection.style.display = "none";
    skillsSection.style.display = "block";
});

learnMoreBtn.addEventListener("click", event => {
    event.preventDefault();
    frontPage.style.display = "none";
    aboutMeSection.style.display = "block";
});

projectsBtn.addEventListener("click", event => {
    event.preventDefault();
    frontPage.style.display = "none";
    projectsSection.style.display = "block";
});

skillsBtn.addEventListener("click", event => {
    event.preventDefault();
    frontPage.style.display = "none";
    skillsSection.style.display = "block";
});
 
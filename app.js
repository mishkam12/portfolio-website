//Retrieve logo element
const logo = document.getElementById("logo");

//Retrieve navigation links
const aboutMeNav = document.getElementById("about-me-nav");
const projectsNav = document.getElementById("projects-nav");
const skillsNav = document.getElementById("skills-nav");

//Retrieve divs of the page
const frontPageDiv = document.getElementById("front-page");
const aboutMeDiv = document.getElementById("about-me");
const projectsDiv = document.getElementById("projects");
const skillsDiv = document.getElementById("skills");
const contactInfoDiv = document.getElementById("contact-info");

//Retrieve buttons
const learnMoreBtn = document.getElementById("learn-more-btn");
const projectsBtn = document.getElementById("projects-btn");
const skillsBtn = document.getElementById("skills-btn");

//Event listener when "About Me" navigation is clicked
aboutMeNav.addEventListener("click", event => {
    event.preventDefault();
    frontPageDiv.style.display = "none";
    projectsDiv.style.display = "none";
    skillsDiv.style.display = "none";
    aboutMeDiv.style.display = "block";
});

//Event listener when "Projects" navigation is clicked
projectsNav.addEventListener("click", event => {
    event.preventDefault();
    frontPageDiv.style.display = "none";
    skillsDiv.style.display = "none";
    aboutMeDiv.style.display = "none";
    projectsDiv.style.display = "block";
});

//Event listener when "Skills" navigation is clicked
skillsNav.addEventListener("click", event => {
    event.preventDefault();
    frontPageDiv.style.display = "none";
    aboutMeDiv.style.display = "none";
    projectsDiv.style.display = "none";
    skillsDiv.style.display = "block";
});

//Event listener when "Learn More" button is clicked
learnMoreBtn.addEventListener("click", event => {
    event.preventDefault();
    frontPageDiv.style.display = "none";
    aboutMeDiv.style.display = "block";
});

//Event listener when "Projects" button is clicked
projectsBtn.addEventListener("click", event => {
    event.preventDefault();
    frontPageDiv.style.display = "none";
    projectsDiv.style.display = "block";
});

//Event listener when "See Skills" button is clicked
skillsBtn.addEventListener("click", event => {
    event.preventDefault();
    frontPageDiv.style.display = "none";
    skillsDiv.style.display = "block";
});
 
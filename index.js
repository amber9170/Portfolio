const texts = ["Web Designer", "UI UX Designer", "Canva Designer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!isDeleting) {
    currentText = texts[index].substring(0, charIndex + 1);
    charIndex++;
    typingElement.textContent = currentText;
    if (charIndex === texts[index].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    currentText = texts[index].substring(0, charIndex - 1);
    charIndex--;
    typingElement.textContent = currentText;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 100 : 150);
}
typeEffect();

const skills = {
    "html": 99,
    "css": 89,
    "js": 50,
    "figma": 95,
    "canva": 90
  };
  for (const skill in skills) {
    const percent = skills[skill];
    document.getElementById(skill + "-fill").style.width = percent + "%";
    document.getElementById(skill + "-percent").textContent = percent + "%";
  }
  function filterSelection(category, event) {
    event.preventDefault();

    let sections = document.querySelectorAll(".imgs > div");
    sections.forEach(section => {
      if (category === "all") {
        section.classList.remove("hide");
      } else {
        section.classList.add("hide");
        if (section.classList.contains(category)) {
          section.classList.remove("hide");
        }
      }
    });
  }
document.querySelectorAll('.navbar-2 a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute("href");
    const section = document.querySelector(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"     
      });
    }
  });
});


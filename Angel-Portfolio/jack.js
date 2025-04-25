require("newrelic");

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");
function PageTransitions() {
  for (let e = 0; e < sectBtn.length; e++) {
    sectBtn[e].addEventListener("click", function (e) {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn","");
      this.className += " active-btn ";
    });
  }
  for (let e = 0; e < allSections.length; e++) {
    allSections[e].addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if (id) {
        sectBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
        sections.forEach((section) => {
          section.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
      let element = document.body;
      element.classList.toggle("light-mode");
    });
  }
}
PageTransitions();

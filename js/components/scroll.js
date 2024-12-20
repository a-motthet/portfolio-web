document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function setActiveLink() {
    let currentSection = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSection = section;
      }
    });

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1); // ลบ # ออก
      const parentLi = link.parentElement;

      if (targetId === currentSection?.id) {
        parentLi.classList.add("active");
      } else {
        parentLi.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});

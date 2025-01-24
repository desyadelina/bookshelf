document.addEventListener("DOMContentLoaded", () => {

  // toggle visibility buat faq answers
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isExpanded = question.getAttribute("aria-expanded") === "true";

      question.setAttribute("aria-expanded", !isExpanded);
      answer.hidden = isExpanded;

      const icon = question.querySelector(".icon");
      icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
    });
  });

  // smooth scroll ke sebuah section ketika nav link di klik
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // toggle hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links-container");

  hamburger.addEventListener("click", () => {
    const isActive = navLinksContainer.classList.toggle("active");

    hamburger.classList.toggle("open", isActive);
  });
  
});
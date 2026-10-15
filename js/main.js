// Mobile nav toggle + current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }
  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

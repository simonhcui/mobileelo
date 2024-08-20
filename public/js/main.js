document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  function updateHeaderWidth() {
    const header = document.querySelector("header");
    const mainContent = document.querySelector("main");
    const windowWidth = window.innerWidth;
    const contentWidth = mainContent.scrollWidth;

    if (contentWidth > windowWidth) {
      header.style.width = `${contentWidth}px`;
    } else {
      header.style.width = "100%";
    }
  }

  // Call on load and on resize
  updateHeaderWidth();
  window.addEventListener("resize", updateHeaderWidth);

  // Call when horizontal scroll occurs
  document.querySelector("main").addEventListener("scroll", updateHeaderWidth);
});

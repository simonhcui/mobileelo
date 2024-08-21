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

    header.style.width = `${Math.max(windowWidth, contentWidth)}px`;
  }

  // Call on load and on resize
  updateHeaderWidth();
  window.addEventListener("resize", updateHeaderWidth);

  // Call when horizontal scroll occurs
  document.querySelector("main").addEventListener("scroll", updateHeaderWidth);

  // Add touch event listeners for Android
  const tableContainer = document.querySelector(".data-table-container");
  let startX;
  let scrollLeft;

  tableContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - tableContainer.offsetLeft;
    scrollLeft = tableContainer.scrollLeft;
  });

  tableContainer.addEventListener("touchmove", (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - tableContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    tableContainer.scrollLeft = scrollLeft - walk;
  });

  tableContainer.addEventListener("touchend", () => {
    startX = null;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Prevent horizontal scroll
  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (e.touches.length > 1) return; // Allow pinch/zoom
      e.preventDefault();
    },
    { passive: false }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent this click from closing the menu immediately
    menu.classList.toggle("active");
  });

  let activeSubmenu = null;

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const submenu = toggle.nextElementSibling;

      if (submenu === activeSubmenu) {
        // If clicking on the same toggle, close the submenu
        submenu.classList.remove("active");
        toggle.classList.remove("active");
        activeSubmenu = null;
      } else {
        // Close all other open submenus
        if (activeSubmenu) {
          activeSubmenu.classList.remove("active");
          activeSubmenu.previousElementSibling.classList.remove("active");
        }

        // Open the clicked submenu
        submenu.classList.add("active");
        toggle.classList.add("active");
        activeSubmenu = submenu;
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      // Close all submenus
      document.querySelectorAll(".submenu").forEach((submenu) => {
        submenu.classList.remove("active");
      });
      document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
        toggle.classList.remove("active");
      });
    }
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

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("sortableTable");
  const headers = table.querySelectorAll("th");
  const tableBody = table.querySelector("tbody");
  const rows = tableBody.querySelectorAll("tr");

  // Convert NodeList to Array for easier manipulation
  const rowsArray = Array.from(rows);

  headers.forEach((header) => {
    const sortBtn = header.querySelector(".sort-btn");
    if (sortBtn) {
      sortBtn.addEventListener("click", () => {
        const key = sortBtn.getAttribute("data-key");
        const isAscending = sortBtn.classList.contains("asc");

        // Sort the rows
        rowsArray.sort((rowA, rowB) => {
          const cellA = rowA
            .querySelector(
              `td:nth-child(${Array.from(headers).indexOf(header) + 1})`
            )
            .textContent.trim();
          const cellB = rowB
            .querySelector(
              `td:nth-child(${Array.from(headers).indexOf(header) + 1})`
            )
            .textContent.trim();

          if (!isNaN(cellA) && !isNaN(cellB)) {
            return isAscending ? cellA - cellB : cellB - cellA;
          } else {
            return isAscending
              ? cellA.localeCompare(cellB)
              : cellB.localeCompare(cellA);
          }
        });

        // Update sort button state
        headers.forEach((h) =>
          h.querySelector(".sort-btn").classList.remove("asc", "desc")
        );
        sortBtn.classList.toggle("asc", !isAscending);
        sortBtn.classList.toggle("desc", isAscending);

        // Reorder the rows in the table
        rowsArray.forEach((row) => tableBody.appendChild(row));
      });
    }
  });
});

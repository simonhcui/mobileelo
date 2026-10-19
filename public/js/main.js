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
  // Find all sortable tables on the page
  const tables = document.querySelectorAll(".sortable-table");

  tables.forEach((table) => {
    const headers = table.querySelectorAll("th.sortable");
    const tableBody = table.querySelector("tbody");

    if (!tableBody) return;

    headers.forEach((header, columnIndex) => {
      header.addEventListener("click", () => {
        const isAscending = header.classList.contains("asc");

        // Get the current rows each time, so sorting always
        // works with the latest order of the rows
        const rowsArray = Array.from(tableBody.querySelectorAll("tr"));

        // Sort the rows
        rowsArray.sort((rowA, rowB) => {
          const cellA = rowA.cells[columnIndex]?.textContent.trim() ?? "";
          const cellB = rowB.cells[columnIndex]?.textContent.trim() ?? "";

          // Compare numeric values numerically
          const numA = Number(cellA.replace(/[%,$]/g, ""));
          const numB = Number(cellB.replace(/[%,$]/g, ""));

          let comparison;

          if (
            cellA !== "" &&
            cellB !== "" &&
            !Number.isNaN(numA) &&
            !Number.isNaN(numB)
          ) {
            comparison = numA - numB;
          } else {
            // Compare text alphabetically
            comparison = cellA.localeCompare(cellB, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          }

          // First click: ascending; next click: descending
          return isAscending ? -comparison : comparison;
        });

        // Update sort indicators for this table only
        headers.forEach((h) => h.classList.remove("asc", "desc"));

        header.classList.toggle("asc", !isAscending);
        header.classList.toggle("desc", isAscending);

        // Reorder rows in this table only
        rowsArray.forEach((row) => tableBody.appendChild(row));
      });
    });
  });
});

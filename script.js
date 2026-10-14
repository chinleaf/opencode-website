(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      // Update active state
      filterBtns.forEach((b) => {
        const isActive = b === btn;
        b.setAttribute("aria-pressed", String(isActive));
        b.classList.toggle("active", isActive);
      });
      // Filter cards
      cards.forEach((card) => {
        const tags = (card.dataset.tags || "").trim();
        if (filter === "all") {
          card.classList.remove("hidden");
        } else {
          const tagList = tags.split(/\s+/).filter(Boolean);
          if (tagList.includes(filter)) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  });
})();
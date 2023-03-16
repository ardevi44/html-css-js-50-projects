const panels = document.querySelectorAll(".panel");

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// Get all panels and add a click event
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Remove all active classes added before
    removeActiveClasses();
    // When the line up is done add the active class just to the clicked element
    panel.classList.add("active");
  });
});

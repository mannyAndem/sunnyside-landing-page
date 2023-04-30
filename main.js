let toggleMenu = document.querySelector(".toggle-menu");
let nav = document.querySelector("#nav");

toggleMenu.addEventListener("click", () => {
  if (toggleMenu.getAttribute("aria-expanded") === "false") {
    toggleMenu.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-expanded", "true");
  } else {
    toggleMenu.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-expanded", "false");
  }
});

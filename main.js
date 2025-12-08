function toggleTheme() {
  document.body.classList.toggle("dark");
}

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

const darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.documentElement.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", null);
  }
});

const themeButton = document.getElementById("theme-toggle");
const icon = document.querySelector("i")
themeButton.addEventListener("click", function() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
   icon.classList.remove("fa-moon");
   icon.classList.add("fa-sun")

  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
   icon.classList.remove("fa-sun");
   icon.classList.add("fa-moon");

  }        
});        
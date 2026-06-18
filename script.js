const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    console.log("You are in light mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    console.log("Enjoy the darkness");
  }        
});         
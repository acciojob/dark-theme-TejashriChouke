//your code here
function swapTheme() {
  const appDiv = document.getElementById("app");
  const swapBtn = document.getElementById("swap");

  if (appDiv.classList.contains("day")) {
    appDiv.classList.remove("day");
    appDiv.classList.add("night");
    swapBtn.textContent = "Switch to Day Theme";
  } else {
    appDiv.classList.remove("night");
    appDiv.classList.add("day");
    swapBtn.textContent = "Switch to Night Theme";
  }
}


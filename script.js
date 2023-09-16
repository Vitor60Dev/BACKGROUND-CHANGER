var button = document.getElementById("button");
var dark_theme = false;

function change_background() {
  if (dark_theme == false) {
    dark_theme = true;
    document.body.style.background = "#fff";
    button.style.background = "#000";
    button.style.color = "#fff";
    button.textContent = "Black";
  } else {
    dark_theme = false;
    document.body.style.background = "#000";
    button.style.background = "#fff";
    button.style.color = "#000";
    button.textContent = "White";
  }
}

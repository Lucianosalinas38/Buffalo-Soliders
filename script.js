const buttons = document.getElementsByClassName("toggle-btn");
const contents = document.getElementsByClassName("content");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const isActive = buttons[i].classList.contains("active");

    // Hide previously active content
    for (let j = 0; j < contents.length; j++) {
      if (j !== i) {
        buttons[j].classList.remove("active");
        contents[j].style.display = "none";
      }
    }

    if (isActive) {
      buttons[i].classList.remove("active");
      contents[i].style.display = "none";
    } else {
      buttons[i].classList.add("active");
      contents[i].style.display = "grid";
    }
  });
}

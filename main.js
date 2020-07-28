const setTheme = (mode) => {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    localStorage.setItem("theme", "light");
  }
  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    localStorage.setItem("theme", "blue");
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    localStorage.setItem("theme", "green");
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    localStorage.setItem("theme", "purple");
  }
};

const themeDots = document.getElementsByClassName("theme-dot");

let existingTheme = localStorage.getItem("theme");
if (!existingTheme) {
  existingTheme = "light";
}

setTheme(existingTheme);

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    const mode = this.dataset.mode;
    setTheme(mode);
  });
}

const switchToggle = document.querySelector("input[type='checkbox']");

function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    console.log("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    console.log("light");
  }
}

switchToggle.addEventListener("change", switchMode);

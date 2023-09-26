let colors = [
  "yellowgreen",
  "turquoise",
  "teal",
  "blue",
  "yellow",
  "violet",
  "orange",
  "green",
  "red",
  "dodgerblue",
  "fuchsia",
  "gray",
  "#000000",
];

let button = document.getElementById("button");
button.addEventListener("click", () => {
  let container = document.querySelector("body");
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.background = randomColor;
});

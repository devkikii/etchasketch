let container = document.querySelector("#grid-container");
for (let i = 0; i < 256; i++) {
  let cell = document.createElement("div");
  cell.style.width = "30px";
  cell.style.height = "30px";
  cell.style.backgroundColor = "white";
  cell.style.margin = "1px";
  cell.classList.add("cell");
  container.appendChild(cell);
  cell.addEventListener("mouseenter", function (e) {
    cell.style.backgroundColor = "blue";
  });
}

let button = document.querySelector("#button");
button.addEventListener("click", function (e) {
  let input = prompt("How Many Cells Do You Want");
  let n = Number(input);
  if (input === null) return;
  while (isNaN(n) || n < 1 || n >= 100) {
    input = prompt("Please type a valid Number ( > 1, < 100");
    if (input === null) return;
    n = Number(input);
    console.log(n);
  }
  let cellSize = 512 / n - 2;
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < n * n; i++) {
    let cell = document.createElement("div");
    cell.style.width = cellSize + "px";
    cell.style.height = cellSize + "px";
    cell.style.boxSizing = "border-box";
    cell.style.backgroundColor = "white";
    cell.style.margin = "1px";
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.addEventListener("mouseenter", function (e) {
      cell.style.backgroundColor = "blue";
    });
  }
});

let clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", function(e) {
    let cell = document.querySelector(".cell")
    let cells = document.querySelectorAll(".cell")
    for (let cell of cells) {
        cell.style.backgroundColor = "white"
    }
});

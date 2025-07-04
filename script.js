let mode = "draw";

let container = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
  let cell = document.createElement("div");
  cell.style.width = "30px";
  cell.style.height = "30px";
  cell.style.backgroundColor = "white";
  cell.style.margin = "1px";
  cell.classList.add("cell");
  container.appendChild(cell);
  cell.addEventListener("mouseenter", () => {
    if (mode === "draw") {
      cell.style.backgroundColor = "blue";
    } else if (mode === "erase") {
      cell.style.backgroundColor = "white";
    }
  });
}

let button = document.querySelector("#button");
button.addEventListener("click", () => {
  let input = prompt("How Many Cells Do You Want");
  if (input === null) return;

  let n = Number(input);
  while (isNaN(n) || n < 1 || n >= 100) {
    input = prompt("Please type a valid Number ( > 1, < 100)");
    if (input === null) return;
    n = Number(input);
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

    cell.addEventListener("mouseenter", () => {
      if (mode === "draw") {
        cell.style.backgroundColor = "blue";
      } else if (mode === "erase") {
        cell.style.backgroundColor = "white";
      }
    });
  }
});

let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.style.backgroundColor = "white";
  }
});

let eraser = document.querySelector("#eraser");
let draw = document.querySelector("#draw");

draw.addEventListener("click", () => mode = "draw");
eraser.addEventListener("click", () => mode = "erase");

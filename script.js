// === MODE TOGGLE VARIABLE (default is 'draw') ===
let mode = "draw";

// === DOM ELEMENTS ===
const container = document.querySelector("#grid-container");
const button = document.querySelector("#button");
const clearButton = document.querySelector("#clear-button");
const eraser = document.querySelector("#eraser");
const draw = document.querySelector("#draw");
const rainbow = document.querySelector("#rainbow")

// === FUNCTION TO CREATE A GRID OF CELLS ===
function createGrid(n) {
  // Clear existing grid
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  const cellSize = 512 / n - 2; // Dynamic sizing so grid fits into 512px

  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.margin = "1px";
    cell.style.backgroundColor = "white";
    cell.style.boxSizing = "border-box";

    // Color the cell when hovered based on current mode
    cell.addEventListener("mouseenter", () => {
      if (mode === "draw") {
        cell.style.backgroundColor = "blue";
      } else if (mode === "erase") {
        cell.style.backgroundColor = "white";
      }
    });

    container.appendChild(cell);
  }
}

// === INITIAL 16x16 GRID ===
createGrid(16);

// === EVENT: "Resize Grid" Button Click ===
button.addEventListener("click", () => {
  let input = prompt("How Many Cells Do You Want");
  if (input === null) return; // Cancelled

  let n = Number(input);

  // Validate input
  while (isNaN(n) || n < 1 || n >= 100) {
    input = prompt("Please type a valid number ( > 1, < 100)");
    if (input === null) return;
    n = Number(input);
  }

  createGrid(n);
});

// === EVENT: "Clear" Button Click ===
clearButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
});

// === EVENTS: Toggle Between Draw and Erase Modes ===
draw.addEventListener("click", () => {
  mode = "draw";
});

eraser.addEventListener("click", () => {
  mode = "erase";
});

// === EVENT: "Rainbow Mode" ===
rainbow.addEventListener("click", (e) => {
  const cells = document.querySelectorAll(".cell")
  for (let cell of cells) {
    cell.addEventListener("mouseenter", (e) => {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()* 16)];
      }
      cell.style.backgroundColor = color
    });
  }
});

// === MODE TOGGLE VARIABLE (default is 'draw') ===
let mode = "draw";

// === NEW: Track whether the mouse is held down ===
let isMouseDown = false;
document.body.addEventListener("mousedown", () => (isMouseDown = true));
document.body.addEventListener("mouseup", () => (isMouseDown = false));
window.addEventListener("mouseleave", () => (isMouseDown = false)); // Fixes stuck drawing after mouse leaves grid


// === DOM ELEMENTS ===
const container = document.querySelector("#grid-container");
const button = document.querySelector("#button");
const clearButton = document.querySelector("#clear-button");
const eraser = document.querySelector("#eraser");
const draw = document.querySelector("#draw");
const rainbow = document.querySelector("#rainbow");

// === NEW: Extracted cell coloring into reusable function ===
function colorCell(cell) {
  if (mode === "draw") {
    cell.style.backgroundColor = "blue";
  } else if (mode === "erase") {
    cell.style.backgroundColor = "white";
  } else if (mode === "rainbow") {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    cell.style.backgroundColor = color;
  }
}

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

    // === CHANGED: Replaced inline color logic with reusable function
    // === ADDED: Support for drag-drawing using mouseenter
    cell.addEventListener("mousedown", () => {
      colorCell(cell); // Cwindow.addEventListener("mouseleave", () => (isMouseDown = false));olor on click
    });

    cell.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        colorCell(cell); // Color on drag
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
  while (isNaN(n) || n < 1 || n >= 64) {
    input = prompt("Please type a valid number ( > 1, < 64)");
    if (input === null) return;
    n = Number(input);
  }

  createGrid(n);
});

// === EVENT: "Clear" Button Click ===
clearButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

// === EVENTS: Toggle Between Draw, Erase and Rainbow Mode ===
draw.addEventListener("click", () => {
  mode = "draw";
});

eraser.addEventListener("click", () => {
  mode = "erase";
});

rainbow.addEventListener("click", () => {
  mode = "rainbow";
});

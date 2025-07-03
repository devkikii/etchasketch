let container = document.querySelector("#grid-container");
for (let i = 0; i < 256; i++) {
    let cell = document.createElement("div")
    cell.style.width = "30px"
    cell.style.height = "30px"
    cell.style.backgroundColor = "white";
    cell.style.margin = "1px";
    cell.classList.add("cell")
    container.appendChild(cell)
    cell.addEventListener("mouseenter", function (e) {
        cell.style.backgroundColor = "blue"
    });
}

let button = document.querySelector("#button");
button.addEventListener("click", function (e) {
  let input = prompt("How Many Cells Do You Want");
  let n = Number(input);
  while (isNaN(n) || n < 1 || n >= 100) {
    input = prompt("Please type a valid Number ( > 1, < 100");
    n = Number(input);
    console.log(n);
  }
});

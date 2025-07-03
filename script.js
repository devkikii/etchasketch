let container = document.querySelector("#grid-container");
for (let i = 0; i < 256; i++) {
    let cell = document.createElement("div")
    cell.style.width = "30px"
    cell.style.height = "30px"
    cell.style.backgroundColor = "white";
    cell.style.margin = "1px";
    cell.classList.add("cell")
    container.appendChild(cell)
}

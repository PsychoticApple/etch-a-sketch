function getGrid(boxAmount = 100, boxSize = 5) {
  const opacity = [];
  for (let i = 0; i < boxAmount; i++) {
    box.push(document.createElement("div"));
    box[i].classList = "box";
    box[i].style.backgroundColor = "white";
    box[i].style.padding = `${boxSize}%`;
    grid.appendChild(box[i]);
    opacity[i] = 10;
  }

  for (let i = 0; i < boxAmount; i++) {
    box[i].addEventListener("mouseover", () => {
      if (box[i].style.backgroundColor == "white") {
        const rgb1 = Math.random() * 255;
        const rgb2 = Math.random() * 255;
        const rgb3 = Math.random() * 255;

        box[i].style.backgroundColor = `rgb(${rgb1} ${rgb2} ${rgb3})`;
      }
      box[i].style.opacity = `${opacity[i]}%`;
      opacity[i] += 10;
    });
  }
}

const grid = document.querySelector(".grid");
const box = [];

getGrid();

function newGrid(gridSize) {
  const boxAmount = gridSize * gridSize;
  const boxSize = (10 * 5) / gridSize;

  box.forEach((el) => el.remove());
  box.forEach((el) => el.remove());

  getGrid(boxAmount, boxSize);
}

const btnSize = document.querySelector(".btnSize");

btnSize.addEventListener("click", () => {
  let gridSize = 0;
  while (gridSize <= 0 || gridSize > 100) {
    gridSize = prompt("How many squares per side?");
    newGrid(gridSize);
  }
});

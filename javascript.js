function newGrid(gridSize) {
  const boxAmount = gridSize * gridSize;
  const padding = (10 * 5) / gridSize;

  box.forEach((el) => el.remove());
  box.forEach((el) => el.remove());

  for (let i = 0; i < boxAmount; i++) {
    box.push(document.createElement("div"));
    box[i].classList = "box";
    box[i].style.backgroundColor = "blue";
    box[i].style.padding = `${padding}%`;
    grid.appendChild(box[i]);
  }

  for (let i = 0; i < boxAmount; i++) {
    box[i].addEventListener("mouseover", () => {
      box[i].style.backgroundColor = "red";
    });
  }
}

const grid = document.querySelector(".grid");
const box = [];

for (let i = 0; i < 100; i++) {
  box.push(document.createElement("div"));
  box[i].classList = "box";
  grid.appendChild(box[i]);
}

for (let i = 0; i < 100; i++) {
  box[i].addEventListener("mouseover", () => {
    box[i].style.backgroundColor = "red";
  });
}

const btnSize = document.querySelector(".btnSize");

btnSize.addEventListener("click", () => {
  let gridSize = 0;
  while (gridSize <= 0 || gridSize > 100) {
    gridSize = prompt("How many squares per side?");
    newGrid(gridSize);
  }
});

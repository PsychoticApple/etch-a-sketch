const grid = document.querySelector(".grid");

const box = [];

for (let i = 0; i < 16; i++) {
  box.push(document.createElement("div"));
  box[i].classList = "box";
  grid.appendChild(box[i]);
}

for (let i = 0; i < 16; i++) {
  box[i].addEventListener("mouseover", () => {
    box[i].style.backgroundColor = "red";
  });
}

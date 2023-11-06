"use strict";

let input = document.querySelector("#num");
let inputValue = document.querySelector("#num").textContent;
let size = +document.querySelector(".range").getAttribute("value");
const sketchPad = document.querySelector(".sketch-pad");

////////////// MAKING THE GRID //////////////////

// function that makes a grid according to input value
const makeGrid = function (size) {
  if (size !== 16) {
    inputValue = input.value;
    size = inputValue;
  }
  sketchPad.innerHTML = "";
  const gridSize = Number(size * size);
  for (let i = 1; i <= gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    div.style.width = `${600 / size}px`;
    div.style.height = `${600 / size}px`;
    sketchPad.appendChild(div);
  }
};
window.onload = makeGrid(16);

// customized grid
const btnChange = document.querySelector(".btn-change");
btnChange.addEventListener("click", () => makeGrid(size));

///////////////////////////////////////////////////////////////////////////////

// changing color of divs when hovered over
const colorPicker = document.querySelector(".color-picker");

sketchPad.addEventListener("mousedown", function (e) {
  const target = e.target.closest(".divs");
  if (target) {
    target.style.backgroundColor = colorPicker.value;
    sketchPad.addEventListener("mouseover", function (e) {
      const target = e.target.closest(".divs");
      if (target) {
        target.style.backgroundColor = colorPicker.value;
      }
    });
  }
});

// RAINBOW button

const btnRainbow = document.querySelector(".btn-rainbow");
// function to make ink color random
function randomColorFunc() {
  let divs = document.querySelectorAll(".divs");
  for (let i = divs.length - 1; i >= 0; i--) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, 
    ${Math.floor(Math.random() * 255)})`;
    divs[i].addEventListener("mouseenter", () => {
      divs[i].style.backgroundColor = color;
    });
  }
}

btnRainbow.addEventListener("click", randomColorFunc);
const remove = () => btnRainbow.removeEventListener("click", randomColorFunc);

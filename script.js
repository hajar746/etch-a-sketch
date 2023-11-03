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

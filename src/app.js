import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generarCarta() {
  let palos = ["♥", "♠", "♦", "♣"];
  let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let paloRandom = getRandom(palos);
  let valorRandom = getRandom(valores);

  let top = document.querySelector(".top");
  let number = document.querySelector(".number");
  let bottom = document.querySelector(".bottom");
  let card = document.querySelector(".card");

  top.innerHTML = paloRandom;
  number.innerHTML = valorRandom;
  bottom.innerHTML = paloRandom;

  card.classList.remove("red", "black");

  if (paloRandom === "♥" || paloRandom === "♦") {
    card.classList.add("red");
  } else {
    card.classList.add("black");
  }
}

window.onload = function () {
  generarCarta();

  let button = document.querySelector("#btn");
  button.addEventListener("click", generarCarta);

  setInterval(generarCarta, 10000);
};


import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <h1 class="text-center">Personajes de Star Wars</h1>
  <div class="container d-flex">
    <div class="row">
      <div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">1 - 5</h4>
            <p class="card-text">Aqui podras encontrar informacion de los personajes principales de Star Wars</p>
          </div>
        </div>
        <div class="col-12 section d-flex flex-wrap" id="1">
          <div class="characters" id="clicker1">
            <span  class="text-center"></span>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">6 - 11</h4>
            <p class="card-text">Aqui podras encontrar informacion de los personajes secundarios de Star Wars</p>
          </div>
        </div>
        <div class="col-12 section d-flex flex-wrap" id="2">
          <div class="characters" id="clicker2">
            <span class="text-center"></span>
          </div>
        </div>
      </div>
      <div >
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">12-17</h4>
          <p class="card-text">Aqui podras encontrar informacion de otros personajes de Star Wars</p>
        </div>
      </div>
        <div  class="col-12 section d-flex flex-wrap" id="3">
          <div class="characters" id="clicker3">
            <span class="text-center"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

async function* getCharacters(url) {
  let currentUrl = url;

  while (currentUrl) {
    try {
      const urlParts = currentUrl.split("/");
      const characterNumber = parseInt(urlParts[urlParts.length - 2]);

      if (characterNumber === 17) {
        const nextCharacterNumber = characterNumber + 2;
        currentUrl = `https://swapi.dev/api/people/${nextCharacterNumber}/`;
        yield null; // Omitir el resultado para el número 17
      } else {
        const response = await fetch(currentUrl);
        const data = await response.json();
        yield data;

        const nextCharacterNumber = characterNumber + 1;
        currentUrl = `https://swapi.dev/api/people/${nextCharacterNumber}/`;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

function generateCharacterBlock(character, sectionId) {
  const section = document.getElementById(sectionId);

  const characterBlock = document.createElement("div");
  characterBlock.classList.add("character");
  characterBlock.classList.add("mx-2");
  characterBlock.innerHTML = `
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">${character.name}</h4>
      <p class="card-text">Height: ${character.height} cm</p>
      <p class="card-text">Weight: ${character.mass} kg</p>
  </div>
  `;
  section.appendChild(characterBlock);
}

async function loadCharacters() {
  const sections = [
    { start: 1, end: 5, id: "1", id2: "clicker1" },
    { start: 6, end: 11, id: "2", id2: "clicker2" },
    { start: 12, end: 17, id: "3", id2: "clicker3" },
  ];

  const card = `
  <div class="character mx-2">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">No hay mas resultados</h4>
    </div>
  </div>
  `;

  for (const section of sections) {
    const url = `https://swapi.dev/api/people/${section.start}/`;
    const charactersGenerator = getCharacters(url);

    const sectionElement = document.getElementById(section.id);
    const sectionElementP = document.getElementById(section.id2);
    let counter = section.start;

    const clickHandler = async () => {
      const { value, done } = await charactersGenerator.next();

      if (!done) {
        generateCharacterBlock(value, section.id);
        counter++;

        if (counter == 17) {
        }
      }

      if (counter > section.end) {
        sectionElement.removeEventListener("click", clickHandler);
        sectionElement.innerHTML += card;
      }
    };

    sectionElement.addEventListener("click", clickHandler);
  }
}

window.addEventListener("DOMContentLoaded", loadCharacters);

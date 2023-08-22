// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const cellsContainer = document.getElementById("cells-container");
const playButton = document.getElementById("play-button");
const difficultySelect = document.getElementById("difficulty");

playButton.addEventListener("click", function () {
  cellsContainer.innerHTML = "";
  let cellsTotal = parseInt(difficultySelect.value);
  console.log(cellsTotal);
  for (let i = 1; i <= cellsTotal; i++) {
    generateGrid(cellsContainer, i, cellsTotal);
  }
});

function generateGrid(container, i, cellsTotal) {
  const cell = document.createElement("li");
  cell.innerText = i;
  cell.classList.add("cell");
  cell.classList.add("cell-" + cellsTotal);

  cell.addEventListener("click", function () {
    cell.classList.toggle("selected-cell");
    console.log(cell.innerText);
  });

  container.append(cell);
}

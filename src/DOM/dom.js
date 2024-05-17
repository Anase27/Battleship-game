// Loads the ships images and calls the generateBoard for gameboard.
import imageImporter from "../images/imagesImportFunction";
import { getShip, getBoard, receiveAttack } from "..";
import generateBoard from "./generateBoard";
const Images = imageImporter();

const howToPlayButton = document.querySelector(".how-to-play-button");
const main = document.querySelector("main");
console.log(howToPlayButton);
howToPlayButton.addEventListener("click", () => {
	const modal = document.querySelector("#how-to-play-dialog");
	modal.showModal();
});
const playerBoard = generateBoard(true);
// playerBoard.classList.add("player-board");
const playerShipDeployModal = document.createElement("div");
playerShipDeployModal.className = "player-ship-deploy-modal";

// player ships container
const shipContainer = document.createElement("div");
shipContainer.className = "ship-grid-container";

// ships image container
const shipImageContainer = document.createElement("div");
shipImageContainer.className = "ships-container";

// ship divs
function handleDragStart(e){
	this.style.opacity = '0.4';

	// dragSrcEl = this;
	e.dataTransfer.effectAllowed = 'move';
	console.log(this.id);
	e.dataTransfer.setData('text/html', this.id);
}
function handleDragEnd(){
	this.style.opacity = '1';
}
let shipNames = [
	["carrier",5],
	["battleship",4],
	["destroyer",3],
	["submarine",3],
	["patrol_boat",2]
];
for (let i = 0; i < 5; i++) {
	const ship = document.createElement("img");
	ship.style.width = `${(shipNames[i][1]*50)-10}px`;
	ship.style.cursor = "move"
	ship.style.zIndex = 2;
	ship.style.position = "relative";
	ship.draggable = true;
	ship.src = Images[shipNames[i][0]];
    ship.alt = `${shipNames[i][0]}-placeholder`;
	ship.className = `ship`;
	ship.dataset.len = shipNames[i][1];
	ship.id = shipNames[i][0];
	ship.addEventListener('dragstart',handleDragStart);
	ship.addEventListener('dragend',handleDragEnd);
    shipImageContainer.appendChild(ship);
}

// player ship deployment grid container
const shipDeployGird = document.createElement("div");
shipDeployGird.className = "ship-deploy-grid-container";

// place your ship heading
const placeShipContainerHeading = document.createElement("span");
placeShipContainerHeading.textContent = "Place your ships:";
shipContainer.appendChild(placeShipContainerHeading);
// adding the ships image container to its plae
shipContainer.appendChild(shipImageContainer);


// player ship deployment grid
const shipGrid = document.createElement("div");
shipGrid.className = "ship-deploy-grid";
shipDeployGird.appendChild(shipGrid);

// adding ship grid to its container
shipGrid.appendChild(playerBoard);
// shipDeployGird.appendChild(shipDeployGird);

// adding both container to its parent
playerShipDeployModal.appendChild(shipContainer);
playerShipDeployModal.appendChild(shipDeployGird);

// adding to main container
main.appendChild(playerShipDeployModal);

// main.appendChild(playerBoard);

// Adding abutton to the main container to start the game 
const startGameButton = document.createElement("button");
startGameButton.textContent = "Start";
startGameButton.type = "button";
startGameButton.disabled=true;
startGameButton.className = "game-start-button";
main.appendChild(startGameButton);

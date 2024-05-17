import player from "./player.js";
import "./index.css";
import "./DOM/dom.js";
import "./computer.js";
import "./randomize.js";

let playerFunctions = player();

let ship1;
export default function main(cords, axis, len, shipN) {
	let shipName = shipN;
	return playerFunctions.playerCordsCheck(cords, axis, len, shipName);
}

function getShip(cords, axis, len, shipN) {
	ship1 = playerFunctions.playerGetShip(len);
	return ship1.length;
}

// function shoot(cords){
//     console.log(Object.keys(shipFunctions.getShipList()));
//     playerFunctions.playerShoot(cords);
// }
function getBoard() {
	return playerFunctions.playerBoard();
}
function receiveAttack(cords) {
	return playerFunctions.playerShoot(cords);
}

// main([1, 1], "x", 3, "ship1");
// shoot([1, 2]);
export { getShip, getBoard, receiveAttack };

import gameboard from "./gameboard.js";
import shipLogic from "./shipLogic.js";
import randomize from "./randomize.js";
const gameFunction = gameboard();
const shipFunction = shipLogic();

let ships = [
	["Carrier", 5],
	["Battleship", 4],
	["Destroyer", 3],
	["Submarine", 3],
	["Patrol Boat", 2],
];
export default function computer() {
	
	let occupiedCords = [];
	// const computerShoot = function () {
	// 	let randomX = Math.random() * 10;
	// 	let randomY = Math.random() * 10;

	// 	if (Object.keys(shipFunction.getShipList()).length == 0) {
	// 		return "no ships to shoot";
	// 	}
	// 	let hitShip = gameFunction.fireAt([randomX, randomY], shipFunction);
	// 	if (Object.keys(shipFunction.getShipList()).length == 0) {
	// 		return "Game over";
	// 	}
	// 	return hitShip;
	// };
	const computerBoard = function () {
		return gameFunction.board;
	};
	const computerCordsCheck = function (cords, axis, len, shipName) {
		// apply loop using the length of ships(look at the top of module) and call below for each vlaue.

		try {
			if(gameFunction.checkCordsForPlacement(cords, axis, len, shipName)==true){
				shipFunction.addShipToAllShips(len, axis, cords);
				return true;
			}
			return false;
        }
		catch(err) {
			return false;
		}
	};
	const computerGetShip = function (cords, axis, len, shipN) {
		return shipFunction.addShipToAllShips(len);
	};
	const placeShips = function () {
		randomize(ships,gameFunction,shipFunction);
	};
	return {
		// computerShoot,
		computerBoard,
		computerCordsCheck,
		computerGetShip,
		placeShips,
	};
}

// let fun = computer();
// fun.placeShips();
// console.log(fun.computerBoard());
// console.log(shipFunction.getShipList());

// export{ships};
// import { ships } from "./computer";

export default function randomize(ships,gameFunction,shipFunction){
    const CordsCheck = function (cords, axis, len, shipName) {
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

    ships.forEach((e) => {
        let randomX = Math.floor(Math.random() * 10);
        let randomY = Math.floor(Math.random() * 10);
        let axisMap = ["x", "y"];
        let axis = axisMap[Math.floor(Math.random() * 2)];
        while (
            !CordsCheck([randomX, randomY], axis, e[1], e[0])
        ) {
            // occupiedCords.push(`${randomX},${randomY}${axis}`);
            randomX = Math.floor(Math.random() * 10);
            randomY = Math.floor(Math.random() * 10);
            axis = axisMap[Math.floor(Math.random() * 2)];
        }
    });
}
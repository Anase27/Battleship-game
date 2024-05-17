export default function gameboard() {
	const cordsAttacked = new Set();
	const board = new Map();

	// 1
	const placeShip = (arr, ship) => {
		arr.forEach((element) => {
			board.set(`${element[0]}${element[1]}`, ship);
		});
	};

	// 2
	const getShipOnCords = (arr) => {
		// returns undefined if there is no ship in the cords.
		board.get(`${arr[0]}${arr[1]}`);
	};

	// 3
	const checkCordsForPlacement = (cords, axis, len, ship) => {
		// CHECK IF THE MAP CONTAINS A SHIP WITH THE SAME NAME
		board.forEach((value,key)=>{
			if(value == ship){
				board.delete(key);
			}
		})
		let x = +cords[0];
		let y = +cords[1];
		len = +len;
		if (x > 9 || y > 9 || x < 0 || y < 0) throw new Error();
		let shipCords = [];
		let ans = false;
		// console.log(`${cords} ${axis} ${len} ${ship}`);
		ans = checkAdjacentCords(cords, len, axis);
		
		if (axis == "x") {
			if (y + len-1 > 9) throw new Error();
			console.log("x-axis condition passed");
			for (let i = 0; i < len; i++) {
				if (getShipOnCords([x, y + i]) == undefined) {
					shipCords.push([x, y + i]);
				} else {
					throw new Error();
				}
			}
		} else {
			if (x + len-1 > 9) throw new Error();
			for (let i = 0; i < len; i++) {
				if (getShipOnCords([x + i, y]) == undefined) {
					shipCords.push([x + i, y]);
				} else {
					throw new Error();
				}
			}
		}
		if (ans == true) {
			placeShip(shipCords, ship);
		}
		console.log(board);

		// console.log(board);

		return ans;
	};

	// 4
	const checkAdjacentCords = (start, len, axis) => {
		let cords = getAdjacentPostions(start, len, axis);
		for (let i = 0; i < cords.length; i++) {
			if (board.get(`${cords[i][0]}${cords[i][1]}`) != undefined) return false;
		}

		return true;
	};

	// 5
	const fireAt = function (cords, playerType) {
		let cord = `${cords[0]}${cords[1]}`;
		// console.log(this);
		if (cordsAttacked.has(cord) == false) {
			cordsAttacked.add(cord);
			let shipName = board.get(cord);
			if (shipName != undefined) {
				let shipList = playerType.getShipList();
				console.log(this.shipFunction);
				// console.log(shipName);
				// console.log(shipList);
				shipList[shipName].hit();
				if (shipList[shipName].isSunk() == true) {
					let adjacent = getAdjacentPostions(
						shipList[shipName].start,
						shipList[shipName].length,
						shipList[shipName].axis
					);
					adjacent.forEach((e) => {
						cordsAttacked.add(`${e[0]}${e[1]}`);
					});
					// Do something to cross out all the adjacent postion on the board.
					delete shipList[shipName];
				}
			}
		}
		return board.delete(cord);
	};
	// 6
	const crossAdjacentPositions = () => {};
	// 7
	const getAdjacentPostions = (start, len, axis) => {
		let ans = [];
		let x = +start[0];
		let y = +start[1];
		if (axis == "x") {
			ans.push([x - 1, y - 1]);
			ans.push([x, y - 1]);
			ans.push([x + 1, y - 1]);

			for (let i = 0; i < len; i++) {
				ans.push([x - 1, y]);
				ans.push([x, y]);
				ans.push([x + 1, y]);
				y = y + 1;
			}
			ans.push([x - 1, y]);
			ans.push([x, y]);
			ans.push([x + 1, y]);
		} else {
			ans.push([x - 1, y - 1]);
			ans.push([x - 1, y]);
			ans.push([x - 1, y + 1]);

			for (let i = 0; i < len; i++) {
				ans.push([x, y - 1]);
				ans.push([x, y]);
				ans.push([x, y] + 1);
				x = x + 1;
			}

			ans.push([x, y - 1]);
			ans.push([x, y]);
			ans.push([x, y + 1]);
		}
		// console.log(ans);
		return ans;
	};
	return {
		board,
		placeShip,
		getShipOnCords,
		checkCordsForPlacement,
		fireAt,
	};
}

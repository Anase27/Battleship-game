import main from "..";
import { getShip, receiveAttack, getBoard } from "..";
it("checks if ships are being placed", () => {
	expect(main([1, 1], "x", 3, "ship1")).toBeTruthy();
});
// it("checks if the gameboard and ships are being placed", () => {
// 	expect(getShip([1, 0], "x", 3, "ship1")).toBe(3);
// });
it("should throw an error when the placement of ship is out of board", () => {
	expect(() => {
		main([8, 0], "x", 5, "ship1");
	}).toThrow();
});
it("checks for the modified map", () => {
	const dummy = new Map([
		["11", "ship1"],
        ["12", "ship1"],
		["13", "ship1"],
	]);

	expect(getBoard()).toEqual(dummy);
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([0, 0], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([0, 1], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([0, 2], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([0, 3], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([0, 4], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
	expect(main([1, 0], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
	expect(main([1, 4], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([2, 0], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([2, 1], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([2, 2], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([2, 3], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(main([2, 4], "x", 1, "ship1")).toBeFalsy();
});
it("check if we can insert the ship at a adjaacent position", () => {
    expect(()=>{main([3, -1], "x", 1, "ship2")}).toThrow();
}); 
it("Fires at a cord and check if it hit any ship", () => {
	expect(
        receiveAttack([1, 2])
        ).toBeTruthy();
});
it("Fires at a cord and check if it hit any ship", () => {
	expect(receiveAttack([1, 1])).toBeTruthy();
});
it("Fires at a cord and check if it hit any ship", () => {
	expect(receiveAttack([1, 3])).toBe("Game over");
});
it("Fires at a cord and check if it hit any ship", () => {
	expect(receiveAttack([1, 2])).toBe("no ships to shoot");
});
it("checks for the modified map", () => {
	const dummy = new Map([
	]);

	expect(getBoard()).toEqual(dummy);
});



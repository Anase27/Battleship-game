import gameboard from "./gameboard";
import shipLogic from "./shipLogic";
const gameFunction = gameboard();
const shipFunction = shipLogic();
export default function player(){
    const playerShoot = function(cords){
        if(Object.keys(shipFunction.getShipList()).length == 0){
            return "no ships to shoot";
        }
        let hitShip = gameFunction.fireAt(cords,shipFunction);
        if(Object.keys(shipFunction.getShipList()).length == 0){
            return "Game over";
        }
        return hitShip;
    }
    const playerBoard = function(){
        return gameFunction.board;
    }
    const playerCordsCheck = function(cords,axis,len,shipName){
        if(gameFunction.checkCordsForPlacement(cords,axis,len,shipName) == true){
            // const shipHarbor = document.querySelector('.ships-container');
            // console.log(shipHarbor.children.length);
            // if(shipHarbor.children.length == 0){
            //     document.querySelector('.game-start-button').disabled = false;
            // }
            shipFunction.addShipToAllShips(len,axis,cords);
            return true;
        }else{
            return false;
        }
    }
    const playerGetShip = function(cords,axis,len,shipN){
        return shipFunction.addShipToAllShips(len);
    }
    return{
        playerShoot,
        playerBoard,
        playerCordsCheck,
        playerGetShip,
    }
}
// export{}
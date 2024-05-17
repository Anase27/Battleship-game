export default function shipLogic(){
    let allShips = {};
    const newShip = function(length) {
        return {
            length,
            hit_No: 0,
            sunk: false,
            hit: function(){
                if(this.hit_No<this.length){
                    ++this.hit_No;
                }
                else{
                    return false;
                }
            },
            isSunk: function(){
                if(this.length == this.hit_No) this.sunk = true;
                return this.sunk;
            }
            // EXTRA ADDED VALUES
            // axis
            // start
        }
    }
    const addShipToAllShips = function(length,axis,start) {
        let shipNo = Object.keys(allShips).length;
        let nShip = newShip(length)
        nShip.axis = axis;
        nShip.start = start
        allShips[`ship${shipNo+1}`] = nShip;
        return nShip;
    }
    const getShipList = function(){
        // console.log(allShips);
        return allShips;
    }

    return{
        allShips,
        newShip,
        addShipToAllShips,
        getShipList,
    }
}

// const shipFunctons = shipLogic();

// shipFunctons.addShipToAllShips(3,"x",[1,1]);
// shipFunctons.addShipToAllShips(3,"x",[4,1]);
// console.log(allShips);
// allShips["ship1"].hit();
// allShips["ship1"].hit();
// allShips["ship1"].hit();
// allShips["ship1"].hit();
// allShips["ship1"].hit();
// allShips["ship1"].hit();
// console.log(allShips);
// let allShips = shipFunctons.getShipList();
// console.log(allShips);

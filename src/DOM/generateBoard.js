// generate the board and add events to the blocks.

import gameboard from "../gameboard";
const boardFunctions = gameboard();

export default function generateBoard(addEvents=false){
    const board = document.createElement("div");
    board.className = "ship-board";

    for(let i=0;i<10;i++){
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.draggable = false;
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.style.position = "relative";
            if(addEvents == true){
                cell.addEventListener('dragenter',function(e){
                    this.classList.add('over');
                })
                cell.addEventListener('dragover',function(e){
                    e.preventDefault();
                    return false;
                })
                cell.addEventListener('dragleave',function(e){
                    this.classList.remove('over');                    
                })
                cell.addEventListener('drop',function(e){
                    this.classList.remove('over');                    
                    e.preventDefault();
                    // console.log(e.target);
                    
                    try{
                        const data =  e.dataTransfer.getData('text/html');
                        const ele = document.querySelector(`#${data}`);
                        // console.log(ele);
                        // console.log(e.target);
                        // console.log(ele.dataset.len);
                        // const res = boardFunctions.checkCordsForPlacement([i,j],"x",ele.dataset.len,`${data}`);
                        // console.log(res);
                        if(boardFunctions.checkCordsForPlacement([e.target.dataset.row,e.target.dataset.col],"x",ele.dataset.len,`${data}`)){
                            const shipHarbor = document.querySelector('.ships-container');
                            console.log(shipHarbor.children.length);
                            console.log('akjdflakj')
                            if(shipHarbor.children.length == 0){
                                document.querySelector('.game-start-button').disabled = false;
                            }
                            e.target.appendChild(ele);

                        }
                    }
                    catch(err){
                        console.log(err);
                    }

                    // console.log(data);
                })
            }
            board.appendChild(cell);
        }
    }
    return board;
}

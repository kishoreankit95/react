import React, {useState, useContext, useEffect} from 'react';
import { PlayerInfo } from './Box';
import './style.css';

function Cell ({}) {

    let playInfo = useContext(PlayerInfo);

    let [ex, setEx, resetting, , boardlength, setBoardArray] = playInfo;
    let currentPlayer = ex? "X" : "O";

    console.log(resetting);

    // useEffect(() => {
    //     console.log("board length updated");
    // }, [boardlength]);

    let clickpass = (e, index) => {
        if(e.target.innerText !== ""){
            alert("can't assign value twice");
            return;
        }
        setEx(!ex);
        // e.target.innerText = (ex) ? "X" : "O";

        setBoardArray((prev) => {
            console.log(prev);
            prev[index-1] = ex? "X" : "O";
            // prev = ["ankit","","","","","","","",""];
            return [...prev];
        });

        ex ? e.target.classList.add("orange"): e.target.classList.add("cyan");
        var cells = document.getElementsByClassName("cell");
        let rowFinalLoop;
        for(let j = index; j<index+3; j++){
            if(j % 3 === 0){
                rowFinalLoop = j;
                break;
            }
        }

        let colFinalLoop;
        for(let j=index;j<10;j+=3){
            if(j<10){
                colFinalLoop = j;
            }
            else{
                return;
            }
        }

        let diagFinalLoop;
        if(index === 1 || index === 9){
            diagFinalLoop = 9;
        }
        else if(index === 3 || index === 7){
            diagFinalLoop = 7
        }


        let checkForRows = (index) => {
            let status = false;
            for(let j=rowFinalLoop-1; j>rowFinalLoop-3; j--){
                if(cells[j].innerText && cells[j].innerText === cells[j-1].innerText){
                    status = true;
                }
                else{
                    status = false;
                    return status;
                }
            }

            if(status){
                alert(`${currentPlayer} user won`);
            }

        }

        let checkForColumns = (index) => {
            let status = false;
            for(let j=colFinalLoop-1; j>2; j-=3){
                if(cells[j].innerText && cells[j].innerText === cells[j-3].innerText){
                    status = true;
                }
                else{
                    status = false;
                    return status;
                }
            }
            if(status){
                alert(`${currentPlayer} user won`);
            }
        }

        let checkForDiagonals = () => {
            let status = false;
            if(index === 1 || index === 9){
                for(let j=diagFinalLoop-1; j>0; j-=4){
                    if(cells[j].innerText && cells[j].innerText === cells[j-4].innerText){
                        status = true;
                    }
                    else{
                        status = false;
                        return status;
                    }
                }
            }
            else if(index === 3 || index === 7){
                for(let j=diagFinalLoop-1; j>2; j-=2){
                    if(cells[j].innerText && cells[j].innerText === cells[j-2].innerText){
                        status = true;
                    }
                    else{
                        status = false;
                        return status;
                    }
                }
            }
            else if(index === 5){
                let nine = () => {
                    for(let j=8; j>0; j-=4){
                        if(cells[j].innerText && cells[j].innerText === cells[j-4].innerText){
                            status = true;
                        }
                        else{
                            status = false;
                        }
                        if(!status){
                            return status;
                        }
                    }
                    return status;
                }
                let seven = () => {
                    for(let j=6; j>2; j-=2){
                        if(cells[j].innerText && cells[j].innerText === cells[j-2].innerText){
                            status = true;
                        }
                        else{
                            status = false;
                        }
                        if(!status){
                            return status;
                        }
                    }
                    return status;
                }

                let checkDiag = nine() && seven();
                
                
            }
            if(status){
                alert(`${currentPlayer} user won`);
            }
            
        }

        checkForRows();
        checkForColumns(index);
        checkForDiagonals(index);
        
    }

    

    return (
        
        <>
        {/* <div className='board'>
        <div className='cell' onClick={(e) => {clickpass(e,1)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,2)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,3)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,4)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,5)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,6)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,7)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,8)}}>
            
        </div>
        <div className='cell' onClick={(e) => {clickpass(e,9)}}>
            
        </div>
        </div> */}

        {console.log("return")}
        <br/>
        <br />

        <div className="board">
            {!resetting ? (boardlength.map((person, i) => {
                return ( 
                (<div key={`src-${i}`} className='cell' onClick={(e) => {clickpass(e,i+1)}}>
                    {person}
                </div>)
                );
            })): (boardlength.map((person, i) => {
                return ( 
                (<div key={`src-${i}`} className='cell' onClick={(e) => {clickpass(e,i+1)}}>
                    {person}
                </div>)
                );
            }))}
            
        </div>

        </>
    )
}

export default Cell;


import React, {useState, useEffect} from 'react';
import './style.css';
import Cell from './Cell';
import Info from './Info';
import Reset from './Reset';

export let PlayerInfo = React.createContext();

function Box() {

  let [ex, setEx] = useState(true);

  let [boardArray, setBoardArray] = useState(["","","","","","","","",""]);

  let [resetting, setResetting] = useState(false);

  let clearOldClass = () => {
    let cell = document.getElementsByClassName("cell");
    for(let i=0; i<cell.length; i++){
      let status = cell[i].classList.contains("orange") || cell[i].classList.contains("cyan");
      if(status){
        cell[i].classList.remove("orange", "cyan");
      }
    }
  }


  return (

    <div className="box" >
      <PlayerInfo.Provider value={[ex, setEx, resetting, setResetting, boardArray, setBoardArray, clearOldClass]}>
        <Cell />
        <Info />
        <Reset />
      </PlayerInfo.Provider>
      
    </div>
    
  )
}

export default Box;
import React, {useContext} from 'react';
import './style.css'
import {PlayerInfo} from './Box';

function Info() {

    let playInfo = useContext(PlayerInfo);

  return (
    <div className="playerName">
        Turn: {playInfo[0] ? "Player X" : "Player O"}
    </div>
  )
}

export default Info
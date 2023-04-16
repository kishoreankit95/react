import React, {useContext} from 'react';
import { PlayerInfo } from './Box';

function Reset() {

    let resets = useContext(PlayerInfo);
    let [,,,setResetting, , setBoardArray, clearOldClass] = resets;

    let resetHandler = () => {
      setResetting(true);
      setBoardArray(() => {
        return(["","","","","","","","",""]);
      });
      clearOldClass();
    }

  return (
    <div>
        <button type="button" onClick={resetHandler}>Reset Board</button>
    </div>
  )
}

export default Reset
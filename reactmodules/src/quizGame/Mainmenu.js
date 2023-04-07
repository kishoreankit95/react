import React, {useContext} from 'react';
import { QuizContext } from './helpers/Context';


function Mainmenu() {

    const QuizContextConsumer = useContext(QuizContext);

    return (
        <>
            <div className="Menu">
            <p>Mainmenu</p>
            <div>
                <button onClick={() => {QuizContextConsumer.setGameState("quiz")}}>Quiz</button>
                
            </div>
            </div>
        </>
    )
}

export default Mainmenu

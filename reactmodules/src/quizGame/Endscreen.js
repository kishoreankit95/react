import React, {useContext} from 'react';
import {QuizContext} from './helpers/Context';
import { Questions } from './helpers/Questionbank';


function Endscreen() {

    const QuizContextConsumer = useContext(QuizContext);

    return (
        <div className="EndScreen">
           <p>Endscreen</p>
           <div>
               Your score is {QuizContextConsumer.score} / {Questions.length}
           </div>
           <br />
           <button onClick={() => {QuizContextConsumer.setGameState("menu")}}>Restart Quiz</button>
        </div>
    )
}

export default Endscreen

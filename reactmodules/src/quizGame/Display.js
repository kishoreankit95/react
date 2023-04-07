import React, { useState } from 'react';
import Endscreen from './Endscreen';
import Mainmenu from './Mainmenu';
import Quiz from './Quiz';
import { QuizContextProvider } from './helpers/Context';
import './style.scss';

function Display() {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);

    return (
        <>
            <QuizContextProvider value={{gameState, setGameState, score, setScore}}>
            {gameState === "menu" && <Mainmenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "endscreen" && <Endscreen />}
            </QuizContextProvider>
        </>
    )
}

export default Display

import React, {useContext, useState, useEffect} from 'react'
import { QuizContext } from './helpers/Context';
import { Questions } from './helpers/Questionbank';

function Quiz() {

    const QuizContextConsumer = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);

    const [answer, setAnswer] = useState("");

    const checkAnswer = () => {
        if(answer === Questions[currQuestion].answer){
            QuizContextConsumer.setScore(c => c + 1)
        }
    }

    useEffect(() => {
        checkAnswer();
    }, [answer]);

    console.log(QuizContextConsumer.score);    

    return (
        <div className="Quiz">
            <div>
                {Questions[currQuestion].prompt}
            </div>
            <div className="options">
                <button onClick={() => {setAnswer("optionA");}}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => {setAnswer("optionB");}}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => {setAnswer("optionC");}}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => {setAnswer("optionD");}}>{Questions[currQuestion].optionD}</button>
            </div>
            <div>

            {currQuestion < (Questions.length - 1) ? (
                <button onClick={() => {setCurrQuestion(c => c + 1)}}>Next Question</button>
            ): (<button onClick={() => {QuizContextConsumer.setGameState("endscreen")}}>Finish Quiz</button>)}

            {/* Alternate Button System view */}
            {/* <button onClick={() => {
                if(currQuestion < Questions.length - 1){
                    setCurrQuestion(c => c + 1)
                }
                else{
                    QuizContextConsumer.setGameState("endscreen");
                }
                }}>
                Next Question
            </button> */}
            </div>
        </div>
    )
}

export default Quiz

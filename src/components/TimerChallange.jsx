import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";


// let timer; 
export default function TimerChallange({ title, targetTime }) {

    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExperied, setTimerExpired] = useState(false);



    function handleStart() {

        // timer = setTimeout(() => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true)
    }

    function handleStop() {
        // clearTimeout(timer);
        clearTimeout(timer.current);
    }
    return (
        <>
            {timerExperied &&< ResultModal targetTime={targetTime} result="lost" />}
            <section className="challenge">
                <h2>{title}</h2>
                {timerExperied && <p>You Lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>

        </>
    )
}
import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useDispatch } from "react-redux";
import { changeExamStatus } from "../../../Redux/Slices/exams";

export const ExamTestTimer = ({ expiryTimestamp }) => {
    const dispatch = useDispatch()

    const {
        // totalSeconds,
        seconds,
        minutes,
        hours,
        // days,
        // isRunning,
        // start,
        // pause,
        // resume,
        // restart,
    } = useTimer({ expiryTimestamp, onExpire: () => dispatch(changeExamStatus("finished")) });


    return (
        <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '3rem', color: "#111169"}}>
                <span>{hours < 10 ? `0${hours}` : hours}</span>:
                <span>{minutes < 20 ? `0${minutes}` : minutes}</span>:
                <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </div>
        </div>
    );
}

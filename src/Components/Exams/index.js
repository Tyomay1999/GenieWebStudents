import React from "react";
import styles from "./styles/exam.module.scss"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ExamTest from "./components/examTest";
import { Greeting, FinishExam, RedirectUserToGeneralSite } from "./components/utils";



const Exam = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const { token, level, lesson } = params
    const examStatus = useSelector( state => state.exams.exam_status )
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5)

    return <div className={ styles.main }>
        {
            examStatus === "visited" ? <Greeting/>
                : examStatus === "start" ? <ExamTest/>
                    : examStatus === "finished" ? <FinishExam />
                        : <RedirectUserToGeneralSite expiryTimestamp={time} />
        }
    </div>
}


export default Exam
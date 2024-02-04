import React from "react";
import styles from "./styles/logicTest.module.scss"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LogicTest from "./components/logicTest";
import { changeExamStatus } from "../../Redux/Slices/logicTest";
import { Greeting, FinishExam, RedirectUserToGeneralSite } from "./components/utils";



const LogicTestMain = () => {
    const dispatch = useDispatch()
    const params = useParams()
    // console.log(params.id)
    const logicTests = useSelector( state => state.logicTest.steps )
    const answers = useSelector( state => state.logicTest.answers )
    const examStatus = useSelector( state => state.logicTest.exam_status )
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5)

    return <div className={ styles.main }>
        {
            examStatus === "visited" ? <Greeting/>
                : examStatus === "start" ? <LogicTest/>
                    : examStatus === "finished" ? <FinishExam />
                        : <RedirectUserToGeneralSite expiryTimestamp={time} />
        }
    </div>
}


export default LogicTestMain
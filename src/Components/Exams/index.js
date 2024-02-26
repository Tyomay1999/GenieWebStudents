import React, { useEffect } from "react";
import styles from "./styles/exam.module.scss"
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ExamTest from "./components/examTest";
import { Greeting, FinishExam, RedirectUserToGeneralSite } from "./components/utils";
import { notification } from "antd";
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Slices/fetch";
import Connection from "../../Services/connections"
import { getExamInfo } from "../../Redux/Slices/Exams/exams";


const Exam = () => {
    //TODO check data
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const { token, level, lesson } = params
    const examStatus = useSelector( state => state.exams.exam_status )
    const time = new Date();
    time.setSeconds( time.getSeconds() + 5 )

    useEffect( () => {
        dispatch( getExamInfo( { token, navigate } ) )
    }, [] )

    useEffect( () => {
        if ( !!window ) {
            window.sessionStorage.setItem( "exam_status", JSON.stringify( examStatus ) )
        }
    }, [examStatus] )


    return <div className={ styles.main }>
        {
            examStatus === "visited" ? <Greeting/>
                : examStatus === "start" ? <ExamTest/>
                    : examStatus === "finished" ? <FinishExam/>
                        : <RedirectUserToGeneralSite expiryTimestamp={ time }/>
        }
    </div>
}


export default Exam
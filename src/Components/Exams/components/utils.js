import React from "react";
import styles from "../styles/exam.module.scss";
import Connections from "../../../Services/connections";
import { useDispatch, useSelector } from "react-redux";
import { changeExamStatus } from "../../../Redux/Slices/Exams/exams";
import { Button, Card, notification } from "antd";
import { useTimer } from "react-timer-hook";
import { useNavigate, useParams } from "react-router";
import { fetchingDataWithAxiosMiddleware } from "../../../Redux/Slices/fetch";

export const Greeting = () => {
    const dispatch = useDispatch()
    const exam = useSelector( state => state.exams.selectedExam )

    return <div className={ styles.message_container }>
        <Card
            title="Welcome to Genie Web Exams platform"
            bordered={ false }
            style={ {
                width: "350px",
                display: "flex",
                flexDirection: "column",
            } }
        >
            <p style={ { textAlign: "justify" } }>
                Dear students, your upcoming exam is scheduled for <b>{ exam.duration } { exam.duration_format }</b>.
                Be well-prepared and focus. <br/><br/> <b>Good luck!</b> Success awaits your efforts.
            </p>
            <div style={ { width: "100%", display: "flex", justifyContent: "flex-end" } }>
                <Button
                    style={ { marginTop: "30px" } }
                    type="primary"
                    onClick={ () => dispatch( changeExamStatus( "start" ) ) }
                >
                    Start
                </Button>
            </div>
        </Card>
    </div>
}


const finishExam = async ( token, navigate ) => {
    try {
        await fetchingDataWithAxiosMiddleware(
            "GET",
            Connections.FinishLogicTest( token )
        )
    } catch ( e ) {
        Connections.connectionIssue( parseInt( e.request.status ), navigate )
    }
}


export const FinishExam = ( { is_logic_test } ) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const approved = useSelector( state => state.exams.approved )
    const params = useParams()

    return <div className={ styles.message_container }>
        <Card
            title="Congratulations on Completing Exam!"
            bordered={ false }
            style={ {
                width: "350px",
                display: "flex",
                flexDirection: "column",
            } }
        >
            <p style={ { textAlign: "justify" } }>
                Congratulations on successfully finishing your exam!
                Your hard work and dedication are commendable.<br/>
                { approved }
                <br/><br/> Well done!
            </p>
            <div style={ { width: "100%", display: "flex", justifyContent: "flex-end" } }>
                <Button
                    style={ { marginTop: "30px" } }
                    type="primary"
                    onClick={ () => {
                        if ( is_logic_test && params?.token ) {
                            finishExam( params?.token, navigate ).then( r => r )
                        }
                        dispatch( changeExamStatus( "" ) )
                    } }
                >
                    Finish
                </Button>
            </div>
        </Card>
    </div>
}


export const RedirectUserToGeneralSite = ( { expiryTimestamp } ) => {
    const student = useSelector( state => state.students.student )
    const {
        seconds,
    } = useTimer( {
        expiryTimestamp, onExpire: () => {
            if ( !student?.physicalCert || !student?.id ) {
                window.location.href = "https://www.genieweb.org";
            } else {
                window.location.href = "https://students.genieweb.org";
            }
        }
    } )

    return <div className={ styles.message_container }>
        <Card
            title="Genie Web"
            bordered={ false }
            style={ {
                textAlign: "center",
                width: "350px",
                display: "flex",
                flexDirection: "column",
            } }
        >
            <p style={ { textAlign: "justify" } }>
                Redirecting you to our general page for further information and updates.
                <br/><br/> Thank you!
            </p>
            <div style={ { width: "100%", display: "flex", justifyContent: "center" } }>{ seconds }</div>
        </Card>
    </div>
}
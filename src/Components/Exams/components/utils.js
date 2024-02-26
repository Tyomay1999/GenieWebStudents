import React from "react";
import styles from "../styles/exam.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeExamStatus } from "../../../Redux/Slices/Exams/exams";
import { Button, Card } from "antd";
import { useTimer } from "react-timer-hook";

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


export const FinishExam = () => {
    const dispatch = useDispatch()
    const approved = useSelector( state => state.exams.approved )


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
                Your hard work and dedication are commendable.<br />
                { approved }
                <br/><br/> Well done!
            </p>
            <div style={ { width: "100%", display: "flex", justifyContent: "flex-end" } }>
                <Button
                    style={ { marginTop: "30px" } }
                    type="primary"
                    onClick={ () => dispatch( changeExamStatus( "" ) ) }
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
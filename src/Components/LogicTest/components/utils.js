import { useDispatch } from "react-redux";
import styles from "../styles/logicTest.module.scss";
import { Button, Card } from "antd";
import { changeExamStatus } from "../../../Redux/Slices/logicTest";
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export const Greeting = () => {
    const dispatch = useDispatch()

    return <div className={ styles.message_container }>
        <Card
            title="Welcome to Genie Web Student platform"
            bordered={ false }
            style={ {
                width: "350px",
                display: "flex",
                flexDirection: "column",
            } }
        >
            <p style={ { textAlign: "justify" } }>
                Dear students, your upcoming exam is scheduled for <b>1 hour</b>.
                Be well-prepared and focus. <br/><br/> <b>Good luck!</b> Success awaits your efforts.
            </p>
            <div style={ { width: "100%", display: "flex", justifyContent: "flex-end" } }>
                <Button
                    style={{marginTop: "30px"}}
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
                Your hard work and dedication are commendable.  <br/><br/> Well done!
            </p>
            <div style={ { width: "100%", display: "flex", justifyContent: "flex-end" } }>
                <Button
                    style={{marginTop: "30px"}}
                    type="primary"
                    onClick={ () => dispatch( changeExamStatus( "" ) ) }
                >
                    Finish
                </Button>
            </div>
        </Card>
    </div>
}



export const RedirectUserToGeneralSite = ( { expiryTimestamp }) => {
    const dispatch = useDispatch()

    const {
        seconds,
    } = useTimer({ expiryTimestamp, onExpire: () => window.open("https://genieweb.org/") })

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
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>{seconds}</div>
        </Card>
    </div>
}
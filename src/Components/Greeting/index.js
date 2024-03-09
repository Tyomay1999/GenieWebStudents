import style from "./style/greeting.module.scss"
import BackgroundAnimation from "../Common/backgroundAnimation";
import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const Greeting = () => {
    const navigate = useNavigate()


    return <>
        <div className={ style.main }>
            <Card
                extra={ <Button onClick={ () => navigate( "/auth" ) } type="primary">Login</Button> }
                title={ "GenieWeb Student Platform" }
                style={ {
                    padding: "20px 0",
                    maxWidth: "500px",
                    textAlign: "",
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "center"
                } }>
                <p style={ { margin: "10px 0", textAlign: "justify" } }>
                    Welcome to GenieWeb, the ultimate destination for students seeking knowledge, connection, and
                    inspiration! Whether you're a high school student preparing for exams,
                    a college student exploring career paths, or a lifelong learner hungry for new
                    insights, you've come to the right place.
                </p>
                <p style={ { margin: "10px 0", textAlign: "justify" } }>
                    At GenieWeb, we believe that education is the key to unlocking endless possibilities.
                    Our platform offers a wealth of resources, tools, and opportunities designed to empower
                    you on your learning journey.
                </p>


            </Card>
        </div>
        <BackgroundAnimation/>
    </>
}

export default Greeting
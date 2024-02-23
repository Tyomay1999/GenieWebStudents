import React from "react"
import styles from "./styles/qr.module.scss"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Slices/fetch";
import Connection from "../../Services/connections";
import { Card } from "antd";
import RegisterStudent from "./components/registerStutent";
import Greeting from "./components/greeting";
import { FinishRegistration } from "./components/utils";


const get_qr_info = async (id) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.GET_QR(id)
        )
        return response.data
    } catch (e) {
        console.log(e.message, "<--------------------- QR CHECK")
    }
}


const QR = () => {
    const params = useParams()
    const [userInfo, setUserInfo] = useState(null)
    const [process, setProcess] = useState("greeting")

    useEffect(() => {
        if (params.id) {
            get_qr_info(params.id).then(data => {
                if (data.qr_info === "USED") {
                    setProcess(data.qr)

                    setTimeout(function () {
                        window.location.href = "https://www.genieweb.org";
                    }, 5000);

                }
                setUserInfo(data)
            })
        }
    }, [get_qr_info])


    return <div className={styles.main}>

        <Card title={
            process === "greeting" ? "Attention: You've Found a QR Code!" :
                process === "registration" ? "Registration Form" :
                    process === "finish" ? "Successfuly Registered" : ""

        } extra={
            process === "greeting" && <span
                onClick={() => {
                    setProcess("registration")
                }}
            >Start</span>
        } style={{ width: 360 }}>
            {
                process === "greeting" ? <Greeting info={userInfo} />
                    : process === "registration" ? <RegisterStudent info={userInfo} setProcess={setProcess} />
                        : process === "finish" ? <FinishRegistration /> : <div>
                            Oops! This QR code has already been scanned and registered.
                            You'll now be automatically redirected to our website for more information and options.
                        </div>
            }
        </Card>

    </div>
}

export default QR
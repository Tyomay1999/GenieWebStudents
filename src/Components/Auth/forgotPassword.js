import React, { useState } from "react"
import styles from "../QR/styles/qr.module.scss"
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Slices/fetch";
import Connection from "../../Services/connections";
import { Button, Card, Form, Input, notification } from "antd";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux/Slices/loading";


const sendResetLinkToEmail = async ( email ) => {
    try {
        const formData = new FormData()
        formData.append("email", email)
        const response = await fetchingDataWithAxiosMiddleware(
            "POST",
            Connection.ResetLinkToEmail(),
            formData
        )
        return response.data
    } catch ( e ) {
        notification.error( {
            placement: 'topRight',
            message: "Email not found",
        } )
    }
}

const ForgotPassword = () => {
    const dispatch = useDispatch()
    const [ process, setProcess ] = useState( "start" )

    const onFinish = data => {
        dispatch( setLoadingState( true ) )
        sendResetLinkToEmail( data?.email ).then( ( resp ) => {
            if ( resp?.message === "success" ) {
                setProcess( "finish" )
            }
            dispatch( setLoadingState( false ) )
        } ).catch(() => {
            dispatch( setLoadingState( false ) )
        })
    }

    return <div className={ styles.main }>

        <Card title={ process === "start" ? "Forgot your Password?" : "Success" }
              style={ {
                  padding: "20px 0",
                  width: "370px",
                  textAlign: "",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
              } }>

            {
                process === "start" ? < Form
                    style={ {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    } }
                    initialValues={ {
                        remember: true,
                    } }
                    onFinish={ onFinish }
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={ [
                            {
                                required: true,
                                type: "email",
                                message: "The input is not valid E-mail!",
                            }
                        ] }
                    >
                        <Input type="email" placeholder="Email"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Confirm
                        </Button>
                    </Form.Item>
                </Form> : <div>
                    Password reset link sent to your email address. Check your inbox.
                </div>
            }

        </Card>

    </div>
}

export default ForgotPassword
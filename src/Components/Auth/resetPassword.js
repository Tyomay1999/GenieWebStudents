import React, { useEffect, useState } from "react"
import styles from "../QR/styles/qr.module.scss"
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Slices/fetch";
import Connection from "../../Services/connections";
import { Button, Card, Form, Input, notification } from "antd";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux/Slices/loading";


const resetStudentPassword = async ( data, navigate ) => {
    try {
        const formData = new FormData()
        formData.append( "token", data.token )
        formData.append( "password", data.password )
        const response = await fetchingDataWithAxiosMiddleware(
            "POST",
            Connection.ResetPassword(),
            formData
        )
        return response.data
    } catch ( e ) {
        const status = parseInt( e.request.status )
        Connection.connectionIssue( status, navigate )
        notification.error( {
            placement: 'topRight',
            message: "Check form entries",
        } )
    }
}

const checkResetToken = async ( token, navigate ) => {
    //TODO ENABLE LOADING SYSTEM
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.CheckResetToken( token )
        )
        return response.data
    } catch ( e ) {
        const status = parseInt( e.request.status )
        Connection.connectionIssue( status, navigate )
        notification.error( {
            placement: 'topRight',
            message: "Invalid Token",
        } )
    }
}

const ResetStudentPassword = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const [ process, setProcess ] = useState( "start" )


    useEffect( () => {
        checkResetToken( params.token, navigate ).then( r => r )
    }, [ checkResetToken ] )


    useEffect( () => {
        if ( process === "finish" ) {
            setTimeout( () => {
                navigate( "/auth" )
            }, 3000 )
        }
    }, [ process ] )


    const onFinish = ( data ) => {
        dispatch( setLoadingState( false ) )
        resetStudentPassword( { password: data.password, token: params.token }, navigate ).then( ( resp ) => {
            if ( resp?.message === "success" ) {
                setProcess( "finish" )
            }
        } ).catch( () => {
            dispatch( setLoadingState( false ) )
        } )
    }

    return <div className={ styles.main }>

        <Card title={ process === "start" ? "Reset your Password?" : "Success" }
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
                        name="password"
                        // label=""
                        rules={ [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ] }
                        hasFeedback
                    >
                        <Input.Password placeholder="New password"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={ [ 'password' ] }
                        hasFeedback
                        rules={ [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ( { getFieldValue } ) => ( {
                                validator( _, value ) {
                                    if ( !value || getFieldValue( 'password' ) === value ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject( new Error( 'The passwords do not match!' ) );
                                },
                            } ),
                        ] }
                    >
                        <Input.Password placeholder="Confirm Password"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Confirm
                        </Button>
                    </Form.Item>
                </Form> : <div>
                    You are successfully updated your password
                </div>
            }

        </Card>

    </div>
}

export default ResetStudentPassword
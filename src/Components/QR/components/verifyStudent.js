import React from "react"
import styles from "../styles/qr.module.scss"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchingDataWithAxiosMiddleware } from "../../../Redux/Slices/fetch";
import Connection from "../../../Services/connections";
import { Button, Card, Form, Input } from "antd";


const scanToken = async ( token ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.Scan( token ),
        )

        return response.data
    } catch ( e ) {
        console.log( e.message, "<------------------- Scan Token" )
    }
}


const sendStudentInfo = async ( data ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "PUT",
            Connection.RegisterStudent(),
            data
        )
        return response.data
    } catch ( e ) {
        console.log( e.message, "<------------------- Send Student Info" )
    }
}

const StudentVerification = () => {
    const params = useParams()
    const [ studentInfo, setStudentInfo ] = useState( null )
    const [ process, setProcess ] = useState( "greeting" )

    useEffect( () => {
        if ( params.token ) {
            scanToken( params.token ).then( resp => {
                if ( resp?.data?.email ) {
                    setStudentInfo( resp.data )
                }
            } )
        }
    }, [ scanToken ] )


    const onFinish = value => {
        sendStudentInfo( { password: value?.password, email: studentInfo?.email } )
            .then(resp => {
                console.log( {
                    resp
                }, "<--------------------- VALUE" )
                setProcess("Finish")
            })
    }

    return <div className={ styles.main }>

        <Card title={ "verification" }
              style={ {
                  padding: "20px 0",
                  width: "370px",
                  textAlign: "",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
              } }>
            <Form
                style={ {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                } }
                initialValues={ {
                    remember: true,
                } }
                onFinish={ onFinish }
                // onFinishFailed={ onFinishFailed }
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
                    <Input.Password placeholder="Password"/>
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
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    </div>
}

export default StudentVerification
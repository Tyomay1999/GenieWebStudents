import React from "react"
import styles from "../styles/qr.module.scss"
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchingDataWithAxiosMiddleware } from "../../../Redux/Slices/fetch";
import Connection from "../../../Services/connections";
import { Button, Card, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../../Redux/Slices/loading";
import { minEightCharacters } from "../../Common/paterns";


const scanToken = async ( token, navigate ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.Scan( token ),
        )

        return response.data
    } catch ( e ) {
        Connection.connectionIssue(parseInt(e.request._status), navigate)
    }
}


const sendStudentInfo = async ( data, navigate ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "PUT",
            Connection.RegisterStudent(),
            data
        )
        return response.data
    } catch ( e ) {
        Connection.connectionIssue(parseInt(e.request._status), navigate)
    }
}

const StudentVerification = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const [ studentInfo, setStudentInfo ] = useState( null )
    const [ process, setProcess ] = useState( "verification" )

    useEffect( () => {
        if ( params.token ) {
            dispatch( setLoadingState( true ) )
            scanToken( params.token, navigate ).then( resp => {
                if ( resp?.data?.email ) {
                    setStudentInfo( resp.data )
                }
                dispatch( setLoadingState( false ) )
            } ).catch( () => {
                dispatch( setLoadingState( false ) )
            } )
        }
    }, [ scanToken, dispatch ] )


    const onFinish = value => {
        sendStudentInfo( { password: value?.password, email: studentInfo?.email }, navigate )
            .then( resp => {
                if ( resp.message === "success" ) {
                    setProcess( "finish" )
                }
                dispatch( setLoadingState( false ) )
            } ).catch( () => {
            dispatch( setLoadingState( false ) )
        } )
    }
    //TODO password regexp && routeing bug
    return <div className={ styles.main }>

        <Card title={ process[ 0 ].toUpperCase() + process.substring( 1 ) }
              style={ {
                  padding: "20px 0",
                  width: "370px",
                  textAlign: "",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
              } }>
            {
                process === "verification" ?
                    < Form
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
                            style={{maxWidth: "370px"}}
                            rules={ [
                                {
                                    required: true,
                                    pattern: minEightCharacters,
                                    message: 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
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
                    </Form> : <div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
                        Your password has been successfully set. You already have an account on our student platform.
                        <Button
                            onClick={ () => {
                                window.location.href = "https://students.genieweb.org";
                            } }
                            style={ { marginTop: "10px" } } type="link">Genie Web Student Platform</Button>
                    </div>
            }
        </Card>

    </div>
}

export default StudentVerification
import React, { useEffect } from 'react';
import styles from "./styles/auth.module.scss"
import { Button, Form, Input } from 'antd';
import { checkAccount, signUp } from "../../Redux/Slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import dataControl from "../../Services/dataControl";

const onFinishFailed = ( errorInfo ) => {
    console.log( 'Failed:', errorInfo );
};
const Auth = () => {
    //TODO password level easy -> hard


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect( () => {
        const token = dataControl.getToken()
        if ( token ) {
            dispatch( checkAccount( navigate ) )
        }
    }, [ dispatch ] )


    const forgotPassword = () => {
        navigate( "/forgot" )
    }

    const onFinish = ( values ) => {
        dispatch( signUp( {
            account: {
                email: values.email,
                password: values.password
            }, navigate
        } ) )
    };

    return <div className={ styles.main }>
        <div className={ styles.title_wrapper }>
            <h1> Genie Web </h1>
            <h3>Student Platform</h3>
        </div>
        <Form
            name="basic"
            labelCol={ {
                span: 8,
            } }
            wrapperCol={ {
                span: 16,
            } }
            style={ {
                minWidth: 300,
                maxWidth: 600,
            } }
            initialValues={ {
                remember: true,
            } }
            onFinish={ onFinish }
            onFinishFailed={ onFinishFailed }
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ] }
            >
                <Input type="email"/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ] }
            >
                <Input.Password/>
            </Form.Item>

            <div style={ { margin: "20px", width: "100%", display: 'flex', justifyContent: "flex-end" } }>
                <Button onClick={ forgotPassword } type="link">
                    Forgot your password?
                </Button>
            </div>

            <Form.Item
                wrapperCol={ {
                    offset: 8,
                    span: 16,
                } }
            >
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    </div>

};
export default Auth;
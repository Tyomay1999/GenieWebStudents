import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { fetchingDataWithAxiosMiddleware } from "../../../Redux/Slices/fetch";
import Connection from "../../../Services/connections";


const MyFormItemContext = React.createContext( [] );

function toArr( str ) {
    return Array.isArray( str ) ? str : [ str ];
}

const MyFormItem = ( { name, ...props } ) => {
    const prefixPath = React.useContext( MyFormItemContext );
    const concatName = name !== undefined ? [ ...prefixPath, ...toArr( name ) ] : undefined;

    const getRules = ( name = "" ) => {
        if ( name === "email" ) {
            return [
                {
                    required: true,
                    type: "email",
                    message: "The input is not valid E-mail!",
                },
            ]
        }
        if ( name === "phone" ) {
            return [
                {
                    required: true,
                    type: "number",
                    message: "This field cannot be left blank",
                },
            ]
        }
        if ( name === "package" ) {
            return [
                {
                    required: false
                }
            ]
        }
        return [ { required: true, message: `This field cannot be left blank` } ]
    }


    return <Form.Item rules={ getRules( concatName[ 0 ] ) } name={ concatName } { ...props } />;
};


const register = async ( data ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "POST",
            Connection.RegisterStudent(),
            data
        )
        return response.data
    } catch ( e ) {
        console.log( e.message, "register student" )
    }
}


const RegisterStudent = ( { info, setProcess } ) => {
    const onFinish = ( value ) => {
        let data = {
            qr_id: info.qr_id,
            unique_id: info.unique_id
        }

        for ( let prop in value ) {
            if ( value[ prop ] !== data[ prop ] ) {
                data[ prop ] = value[ prop ]
            }
        }

        register( data ).then( resp => {
            console.log( resp )
            if ( resp?.message === "success" ) {
                setProcess( "Finish" )
            }
        } )
        console.log( data, "<------------------ DATA" )
    };
    return <Form
        name="form_item_path" layout="vertical" onFinish={ onFinish }
    >
        <MyFormItem name="name" label="First Name">
            <Input/>
        </MyFormItem>
        <MyFormItem name="lastName" label="Last Name">
            <Input/>
        </MyFormItem>
        <MyFormItem name="email" label="Email">
            <Input/>
        </MyFormItem>
        <MyFormItem name="phone" label="Phone">
            <InputNumber
                minLength={ 8 }
                maxLength={ 9 }
                style={ { width: "100%" } }
            />
        </MyFormItem>

        <div style={ { width: "100%", display: "flex", justifyContent: "center" } }>
            <Button type="primary" htmlType="submit">
                Confirm
            </Button>
        </div>
    </Form>
}


export default RegisterStudent
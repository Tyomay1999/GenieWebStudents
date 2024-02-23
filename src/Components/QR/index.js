import React from "react"
import styles from "./styles/qr.module.scss"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Slices/fetch";
import Connection from "../../Services/connections";
import { Card } from "antd";
import RegisterStudent from "./components/registerStutent";


const get_qr_info = async ( id ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.GET_QR( id )
        )
        return response.data
    } catch ( e ) {
        console.log( e.message, "<--------------------- QR CHECK" )
    }
}


const QR = () => {
    const params = useParams()
    const [ userInfo, setUserInfo ] = useState( null )
    const [ process, setProcess ] = useState( "greeting" )

    useEffect( () => {
        if ( params.id ) {
            get_qr_info( params.id ).then( data => {
                setUserInfo( data )
            } )
        }
    }, [ get_qr_info ] )


    return <div className={ styles.main }>

        <Card title={ userInfo?.qr_info } extra={
            <span
                onClick={ () => {
                    setProcess( "registration" )
                } }
            >Start</span>
        } style={ { width: 300 } }>
            {
                process === "greeting" ? <div>Greeting</div>
                    : process === "registration" ? <RegisterStudent info={ userInfo } setProcess={setProcess}/>
                        : process === "Finish" ? <div>Finish</div> : <></>
            }
        </Card>

    </div>
}

export default QR
import React, { useEffect } from "react"
import styles from "../QR/styles/qr.module.scss"
import { fetchingDataWithAxiosMiddleware } from "../../Redux/Slices/fetch";
import Connection from "../../Services/connections";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux/Slices/loading";


const stopResetPassword = async ( token, navigate ) => {
    try {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.StopResettingPassword( token )
        )
        navigate( "/info/reset-stopped" )
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

const StopResettingStudentPassword = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        dispatch( setLoadingState( true ) )
        stopResetPassword( params.token, navigate ).then( r => r )
    }, [ stopResetPassword ] )


    return <div className={ styles.main }>

    </div>
}

export default StopResettingStudentPassword
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchingDataWithAxiosMiddleware } from "./fetch";
import dataControl from "../../Services/dataControl";
import Connections from "../../Services/connections";
import { setLoadingState } from "./loading";
import { notification } from "antd";


export const checkAccount = createAsyncThunk(
    "authentication/checkingAccount",
    async ( navigate ) => {

        try {
            const response = await fetchingDataWithAxiosMiddleware(
                "GET",
                Connections.CheckAccount()
            )
            if ( response.data.authenticate ) {
                navigate( '/home' )
            } else {
                Connections.connectionIssue( 403, navigate )
            }
        } catch ( e ) {
            Connections.connectionIssue( 403, navigate )
            dataControl.removeToken()
        }
    }
)


export const signUp = createAsyncThunk(
    "authentication/signUp",
    async ( payload, action ) => {
        action.dispatch( setLoadingState( true ) )
        try {
            const response = await fetchingDataWithAxiosMiddleware(
                "POST",
                Connections.SignUp(),
                {
                    ...payload.account
                }
            )
            dataControl.saveToken( response.data.access_token )
            payload.navigate( '/home' )
        } catch ( e ){
            notification.error( {
                placement: 'topRight',
                message: "Check form entries",
            } )
        }
    }
)

export const auth = createSlice( {
    name: "authentication",
    initialState: {},
    reducers: {},
} )
export const {} = auth.actions
export default auth.reducer

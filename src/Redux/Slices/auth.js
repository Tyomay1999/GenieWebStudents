import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchingDataWithAxiosMiddleware } from "./fetch";
import dataControl from "../../Services/dataControl";
import Connections from "../../Services/connections";
import { setLoadingState } from "./loading";


export const checkAccount = createAsyncThunk(
    "authentication/checkingAccount",
    async ( navigate ) => {

        try {
            const response = await fetchingDataWithAxiosMiddleware(
                "GET",
                Connections.CheckAccount()
            )
            if ( response.data.authenticate ) {
                navigate( '/' )
            } else {
                navigate( '/auth' )
            }
        } catch ( e ){
            navigate( '/auth' )
            dataControl.removeToken()
        }
    }
)


export const signUp = createAsyncThunk(
    "authentication/signUp",
    async ( payload, action ) => {
        action.dispatch(setLoadingState(true))
        const response = await fetchingDataWithAxiosMiddleware(
            "POST",
            Connections.SignUp(),
            {
                ...payload.account,
                status: "Admin"
            }
        )
        dataControl.saveToken( response.data.access_token )
        payload.navigate( '/' )
    }
)

export const auth = createSlice( {
    name: "authentication",
    initialState: {},
    reducers: {},
} )
export const {} = auth.actions
export default auth.reducer

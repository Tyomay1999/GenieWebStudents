import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchingDataWithAxiosMiddleware } from "./fetch";
import dataControl from "../../Services/dataControl";
import Connections from "../../Services/connections";
import { setLoadingState } from "./loading";


export const checkAccount = createAsyncThunk(
    "authentication/checkingAccount",
    async ( navigate ) => {

        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connections.CheckAccount()
        )

        if ( response.data.authenticate ) {
            navigate( '/' )
        } else {
            navigate( '/auth' )
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
    extraReducers: builder => {
        builder.addCase( signUp.pending, ( state ) => {
            console.log( "PENDING signUp" )
        } )
        builder.addCase( signUp.fulfilled, ( state ) => {
            console.log( "fulfilled signUp" )
        } )
        builder.addCase( signUp.rejected, ( state ) => {
            console.log( "rejected signUp" )
        } )
        builder.addCase( checkAccount.pending, ( state ) => {
            console.log( "PENDING checkAccount" )
        } )
        builder.addCase( checkAccount.fulfilled, ( state ) => {
            console.log( "fulfilled checkAccount" )
        } )
        builder.addCase( checkAccount.rejected, ( state ) => {
            console.log( "rejected checkAccount" )
        } )

    }
} )
export const {} = auth.actions
export default auth.reducer

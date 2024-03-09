import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoadingState } from "../loading";
import { fetchingDataWithAxiosMiddleware } from "../fetch";
import Connection from "../../../Services/connections";
import { notification } from "antd";

export const getStudentInfo = createAsyncThunk(
    'students/studentInfo',
    async ( data, action ) => {
        try {
            action.dispatch( setLoadingState( true ) )
            const response = await fetchingDataWithAxiosMiddleware(
                "GET",
                Connection.GetStudentInfo(),
            );
            setTimeout( () => {
                action.dispatch( setLoadingState( false ) )
            }, 1000 )
            return response.data.student;
        } catch ( e ) {
            action.dispatch( setLoadingState( false ) )
            Connection.connectionIssue(parseInt(e.request.status), data.navigate)
            notification.error( {
                placement: 'topRight',
                message: e.message,
            } );
        }
    }
);
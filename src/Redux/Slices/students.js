import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchingDataWithAxiosMiddleware } from "./fetch"; //next js redux toolkit
import Connection from "../../Services/connections"


export const getStudents = createAsyncThunk(
    'students/getAll',
    async (  ) => {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.StudentsAll(),
        );
        return response.data.students;
    }
);

export const sendEmail = createAsyncThunk(
    'students/sendEmail',
    async ( data ) => {

        const formData = new FormData()
        formData.append("email", data.email)
        const response = await fetchingDataWithAxiosMiddleware(
            "POST",
            Connection.sendEmail(),
            formData
        );
        return response.data.message;
    }
);


export const students = createSlice( {
    name: 'students',
    initialState: {
        all: [],
    },
    reducers: {

    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getStudents.fulfilled, ( state, action ) => {
                state.all = action.payload;
            } );
        builder
            .addCase( sendEmail.fulfilled, ( state, action ) => {
                console.log(action.payload, "<-------------- sendEmail PAYLOAD")
                // state.all = action.payload;
            } );
    }
} )

export const { } = students.actions
export default students.reducer
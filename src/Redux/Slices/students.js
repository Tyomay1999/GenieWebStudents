import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchingDataWithAxiosMiddleware } from "./fetch"; //next js redux toolkit
import Connection from "../../Services/connections"
import frontEnd_PNG from "../../Assets/Student/front-end.png";
import student_PNG from "../../Assets/Student/student.png";
import html_SVG from "../../Assets/Student/html.svg";
import css_SVG from "../../Assets/Student/css.svg";
import javaScript_SVG from "../../Assets/Student/js.svg";


export const getStudents = createAsyncThunk(
    'students/getAll',
    async () => {
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
        formData.append( "email", data.email )
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
        student: {
            name: "Artyom",
            lastName: "Bordulanyuk",
            phone: "+37491730250",
            email: "artyom.bordulanyuk@gmail.com",
            position: "Front-End",
            positionIcon: frontEnd_PNG,
            image: student_PNG,
            lessons: [
                {
                    icon: html_SVG,
                    name: "Html",
                    status: "Complicated",
                    isComplicated: true
                },
                {
                    icon: css_SVG,
                    name: "Css",
                    status: "In progress",
                    isComplicated: false
                },
                {
                    icon: javaScript_SVG,
                    name: "JavaScript",
                    status: "Waiting",
                    isComplicated: false
                },
            ]
        }
    },
    reducers: {},
    extraReducers: ( builder ) => {
        builder
            .addCase( getStudents.fulfilled, ( state, action ) => {
                state.all = action.payload;
            } );
        builder
            .addCase( sendEmail.fulfilled, ( state, action ) => {
                console.log( action.payload, "<-------------- sendEmail PAYLOAD" )
                // state.all = action.payload;
            } );
    }
} )

export const {} = students.actions
export default students.reducer
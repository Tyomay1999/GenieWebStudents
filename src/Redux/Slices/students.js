import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchingDataWithAxiosMiddleware } from "./fetch";
import Connection from "../../Services/connections"
import frontEnd_PNG from "../../Assets/Student/front-end.png";
import student_PNG from "../../Assets/Student/student.png";
import html_SVG from "../../Assets/Student/html.svg";
import css_SVG from "../../Assets/Student/css.svg";
import javaScript_SVG from "../../Assets/Student/js.svg";
import { setLoadingState } from "./loading";


export const getStudentInfo = createAsyncThunk(
    'students/studentInfo',
    async ( data, action ) => {
        action.dispatch( setLoadingState( true ) )
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.GetStudentInfo(),
        );
        setTimeout( () => {
            action.dispatch( setLoadingState( false ) )
        }, 1000 )
        return response.data.students;
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
            .addCase( getStudentInfo.fulfilled, ( state, action ) => {
                let payload = {}
                for ( let prop in action.payload ) {
                    if ( action.payload[ prop ] ) {
                        payload[ prop ] = action.payload[ prop ]
                    }
                }
                payload[ "lessons" ] = state.student.lessons
                if ( !payload[ "positionIcon" ] ) {
                    payload[ "positionIcon" ] = frontEnd_PNG
                }
                if ( !payload[ "image" ] ) {
                    payload[ "image" ] = student_PNG
                }

                state.student = payload;

            } );
    }
} )

// export const {} = students.actions
export default students.reducer
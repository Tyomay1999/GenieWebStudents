import { createSlice } from '@reduxjs/toolkit'
import frontEnd_PNG from "../../../Assets/Student/front-end.png";
import student_PNG from "../../../Assets/Student/student.png";
import html_SVG from "../../../Assets/Student/html.svg";
import css_SVG from "../../../Assets/Student/css.svg";
import javaScript_SVG from "../../../Assets/Student/js.svg";
import { getStudentInfo } from "./asyncThunks";
import { handlerPayloadData } from "./utils";


export const students = createSlice( {
    name: 'students',
    initialState: {
        all: [],
        student: {
            // id: "",
            // name: "Artyom",
            // lastName: "Bordulanyuk",
            // phone: "+37491730250",
            // email: "artyom.bordulanyuk@gmail.com",
            // position: "Front-End",
            // positionIcon: frontEnd_PNG,
            // image: student_PNG,
            // lessons: [
            //     {
            //         icon: html_SVG,
            //         name: "Html",
            //         status: "Complicated",
            //         isComplicated: true
            //     },
            //     {
            //         icon: css_SVG,
            //         name: "Css",
            //         status: "In progress",
            //         isComplicated: false
            //     },
            //     {
            //         icon: javaScript_SVG,
            //         name: "JavaScript",
            //         status: "Waiting",
            //         isComplicated: false
            //     },
            // ]
        }
    },
    reducers: {},
    extraReducers: ( builder ) => {
        builder
            .addCase( getStudentInfo.fulfilled, ( state, action ) => {
                state.student = handlerPayloadData( action.payload );
            } );
    }
} )

// export const {} = students.actions
export default students.reducer
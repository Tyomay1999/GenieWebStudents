import { configureStore } from '@reduxjs/toolkit'
import students  from "./Slices/students";
import exams  from "./Slices/exams";
import auth  from "./Slices/auth";


const store = configureStore( {
    reducer: {
        students,
        exams,
        auth
    }
} )

export default store
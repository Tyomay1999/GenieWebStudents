import { configureStore } from '@reduxjs/toolkit'
import students  from "./Slices/Student/students";
import exams  from "./Slices/exams";
import auth  from "./Slices/auth";
import loading  from "./Slices/loading";


const store = configureStore( {
    reducer: {
        students,
        loading,
        exams,
        auth
    }
} )

export default store
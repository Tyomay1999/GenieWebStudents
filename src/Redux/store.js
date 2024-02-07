import { configureStore } from '@reduxjs/toolkit'
import students  from "./Slices/students";
import exams  from "./Slices/exams";


const store = configureStore( {
    reducer: {
        students,
        exams
    }
} )

export default store
import { configureStore } from '@reduxjs/toolkit'
import { students } from "./Slices/students";


const store = configureStore( {
    reducer: {
        students
    }
} )

export default store
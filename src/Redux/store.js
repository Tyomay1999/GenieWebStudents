import { configureStore } from '@reduxjs/toolkit'
import students  from "./Slices/students";
import logicTest  from "./Slices/logicTest";


const store = configureStore( {
    reducer: {
        students,
        logicTest
    }
} )

export default store
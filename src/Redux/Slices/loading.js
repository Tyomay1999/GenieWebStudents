import { createSlice } from '@reduxjs/toolkit'



export const loading = createSlice( {
    name: 'loading',
    initialState: {
        run: false
    },
    reducers: {
        setLoadingState: ( state, action ) => {
            state.run = action.payload || false
        }
    },
} )

export const {setLoadingState} = loading.actions
export default loading.reducer
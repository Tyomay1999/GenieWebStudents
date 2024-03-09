import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchingDataWithAxiosMiddleware } from "../fetch";
import Connection from "../../../Services/connections";
import { notification } from "antd";


export const getExams = createAsyncThunk(
    'exams/getAll',
    async () => {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.GetExams(),
        );
        return response.data.exams;
    }
)

export const getExamInfo = createAsyncThunk(
    'exams/getExamInfo',
    async ( { token, navigate, is_logic_test }, ) => {
        try {
            const formData = new FormData()
            formData.append( "langId", "1" )
            const response = await fetchingDataWithAxiosMiddleware(
                is_logic_test ? "PUT" : "POST",
                Connection.GetExamInfo( token ),
                formData
            )
            if ( !response.data.is_used ) {
                return response.data.exam
            }
            Connection.connectionIssue( 0, navigate )
            notification.error( {
                placement: 'topRight',
                message: "Link already used",
            } )
        } catch ( e ) {
            const status = parseInt( e.response.status )
            Connection.connectionIssue( status, navigate )
            notification.error( {
                placement: 'topRight',
                message: "Problem",
            } )
        }
    }
);
export const sendSelectedAnswers = createAsyncThunk(
    'exams/sendSelectedAnswers',
    async ( data, ) => {
        try {
            const formData = new FormData()
            // formData.append( "langId", "1" )
            data.answers.forEach( answer => {
                formData.append( answer.id, answer.answer_index )
            } )
            const response = await fetchingDataWithAxiosMiddleware(
                "POST",
                Connection.SendExamSelectedAnswers( data?.student_id ),
                formData
            )
            return response.data.approved
        } catch ( e ) {
            // navigate( "/" )
            notification.error( {
                placement: 'topRight',
                message: e.message,
            } )
        }
    }
);


export const exams = createSlice( {
    name: 'exams',
    initialState: {
        exam_status: JSON.parse( sessionStorage.getItem( 'exam_status' ) ) || "visited",
        approved: "",
        all: [],
        selectedExam: JSON.parse( sessionStorage.getItem( 'selectedExam' ) ) || {},
        selected_answer: JSON.parse( sessionStorage.getItem( 'selected_answer' ) ) || {
            id: null,
            title: "",
            question: "",
            answer: "",
            answer_index: null,
            question_index: null
        },
        answers: []
    },
    reducers: {
        changeExamStatus: ( state, action ) => {
            state.exam_status = action.payload
        },
        selectAnswer: ( state, action ) => {
            state.selected_answer = action.payload
        },
        clearSelectedAnswer: ( state ) => {
            state.selected_answer = {
                id: null,
                title: "",
                question: "",
                answer: "",
                answer_index: null
            }
        },
        changeAnswer: ( state, action ) => {
            state.answers[ state.selected_answer.question_index ] = action.payload
        },
        addAnswer: ( state ) => {
            state.answers.push( state.selected_answer )
        }
    },
    extraReducers: ( builder ) => {
        builder.addCase( getExams.fulfilled, ( state, action ) => {
            state.all = action.payload
        } )
        builder.addCase( getExamInfo.fulfilled, ( state, action ) => {
            state.selectedExam = action.payload || {}
        } )
        builder.addCase( sendSelectedAnswers.fulfilled, ( state, action ) => {
            state.approved = action.payload
        } )
    }
} )


export const {
    changeAnswer, addAnswer, changeExamStatus,
    clearSelectedAnswer, selectAnswer
} = exams.actions
export default exams.reducer
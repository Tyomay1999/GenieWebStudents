import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchingDataWithAxiosMiddleware } from "./fetch";
import Connection from "../../Services/connections";
import html_SVG from "../../Assets/Student/html.svg"
import css_SVG from "../../Assets/Student/css.svg"
import js_SVG from "../../Assets/Student/js.svg"


export const getExams = createAsyncThunk(
    'exams/getAll',
    async () => {
        const response = await fetchingDataWithAxiosMiddleware(
            "GET",
            Connection.StudentsAll(),
        );
        return response.data.students;
    }
);


export const exams = createSlice( {
    name: 'exams',
    initialState: {
        exam_status: "visited",
        all: [
            {
                icon: html_SVG,
                name: "Html",
                level: "Easy",
                duration: "30m",
                url: "/exam/html/easy/token"
            },
            {
                icon: html_SVG,
                name: "Html",
                level: "Medium",
                duration: "45m",
                url: "/exam/html/medium/token"
            },
            {
                icon: css_SVG,
                name: "Css",
                level: "Easy",
                duration: "30m",
                url: "/exam/css/easy/token"
            },
            {
                icon: css_SVG,
                name: "Css",
                level: "Medium",
                duration: "45m",
                url: "/exam/css/medium/token"
            },
            {
                icon: js_SVG,
                name: "JavaScript",
                level: "Css",
                duration: "30m",
                url: "/exam/js/easy/token"
            },
            {
                icon: js_SVG,
                name: "JavaScript",
                level: "Medium",
                duration: "45m",
                url: "/exam/js/medium/token"
            },
            {
                icon: js_SVG,
                name: "JavaScript",
                level: "Hard",
                duration: "45m",
                url: "/exam/js/hard/token"
            },
        ],
        selectedExam: {
            name: "logicTest",
            duration: 30,
            duration_format: "minutes",
            questions: [
                {
                    id: 1,
                    title: '',
                    questionTitle: "Logical Deduction",
                    question: "If all cats are mammals and Fluffy is a cat, what can be logically concluded about Fluffy?",
                    answers: [
                        "A) Fluffy is a mammal.",
                        "B) Fluffy is a reptile.",
                        "C) Fluffy is a bird.",
                        "D) Fluffy is an amphibian."
                    ],
                },
                {
                    id: 2,
                    title: '',
                    questionTitle: "Pattern Recognition",
                    question: "Identify the next item in the series: Square, Circle, Triangle, __?",
                    answers: [
                        "A) Pentagon",
                        "B) Hexagon",
                        "C) Rectangle",
                        "D) Oval"
                    ],
                },
                {
                    id: 3,
                    title: '',
                    questionTitle: "Word Relationships",
                    question: "Choose the word that does not belong: Carrot, Apple, Orange, Chair.",
                    answers: [
                        "A) Carrot",
                        "B) Apple",
                        "C) Orange",
                        "D) Chair"
                    ],
                },
                {
                    id: 4,
                    title: '',
                    questionTitle: "Analogies",
                    question: "Complete the analogy: Sun is to Day as Moon is to __?",
                    answers: [
                        "A) Dark",
                        "B) Night",
                        "C) Star",
                        "D) Eclipse"
                    ],
                }
          ]
        },
        selected_answer: {
            id: null,
            questionTitle: "",
            question: "",
            answer: "",
            answer_index: null,
            question_index: null
        },
        answers: []
    },
    reducers: {
        changeExamStatus: (state, action) => {
            state.exam_status = action.payload
        },
        selectAnswer: (state, action) => {
            state.selected_answer = action.payload
        },
        clearSelectedAnswer: (state) => {
            state.selected_answer = {
                id: null,
                questionTitle: "",
                question: "",
                answer: "",
                answer_index: null
            }
        },
        changeAnswer: ( state, action ) => {
            state.answers[state.selected_answer.question_index] = action.payload
        },
        addAnswer: (state) => {
            state.answers.push(state.selected_answer)
        }   
    },
    extraReducers: ( builder ) => {

    }
} )


export const {
    changeAnswer, addAnswer, changeExamStatus,
    clearSelectedAnswer, selectAnswer
} = exams.actions
export default exams.reducer
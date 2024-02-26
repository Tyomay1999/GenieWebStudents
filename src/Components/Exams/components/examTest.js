import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/exam.module.scss"
import { useParams } from "react-router";
import { ExamTestTimer } from "./timer";
import { Button, Steps, theme } from 'antd';
import ExamCard from "./card";
import {
    addAnswer,
    changeAnswer,
    changeExamStatus,
    clearSelectedAnswer,
    selectAnswer, sendSelectedAnswers
} from "../../../Redux/Slices/Exams/exams";
import { students } from "../../../Redux/Slices/Student/students";
import { getStudentInfo } from "../../../Redux/Slices/Student/asyncThunks";


const ExamTest = () => {
    const dispatch = useDispatch()
    const questions = useSelector( state => state.exams.selectedExam.questions )
    const exam = useSelector( state => state.exams.selectedExam )
    const student_id = useSelector( state => state.students.student.id )
    const selectedAnswer = useSelector( state => state.exams.selected_answer )
    const answers = useSelector( state => state.exams.answers )
    const { token } = theme.useToken();
    const [ current, setCurrent ] = useState( 0 );

    const time = new Date();
    time.setSeconds( time.getSeconds() + 60 * parseInt( exam.duration ) )


    useEffect( () => {
        if ( !student_id ) {
            dispatch( getStudentInfo() )
        }
        if ( answers[ current ] ) {
            dispatch( selectAnswer( answers[ current ] ) )
            window.sessionStorage.setItem("selectedExam", JSON.stringify(exam))
            window.sessionStorage.setItem("selectedAnswer", JSON.stringify(selectedAnswer))
        }
    }, [ current, dispatch ] )


    const next = () => {
        if ( answers[ current ] ) {
            dispatch( changeAnswer( selectedAnswer ) )
        } else {
            dispatch( addAnswer( selectedAnswer ) )
        }
        setCurrent( current + 1 );
        dispatch( clearSelectedAnswer() )
    };

    const prev = () => {
        setCurrent( current - 1 );
        dispatch( selectAnswer( answers.filter( answer => answer.id === questions[ current - 1 ].id )[ 0 ] ) )
    };

    const done = () => {
        dispatch( changeExamStatus( "finished" ) )
        dispatch( sendSelectedAnswers( { answers: [ ...answers, selectedAnswer ], student_id: student_id } ) )
    };

    const items = questions?.map( ( item ) => ( {
        key: item.title,
        title: item.title,
    } ) );

    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        // maxWidth: "500px",
        // minWidth: "350px",
        color: token.colorTextTertiary,
        // backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        // border: `1px dashed ${ token.colorBorder }`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    };

    return <div className={ styles.main }>
        <div className={ styles.timer }>
            <ExamTestTimer expiryTimestamp={ time }/>
        </div>
        <div style={ { width: "100%", display: "flex", justifyContent: "center" } }>
            <Steps type="inline" current={ current } items={ items }/>
        </div>
        <div style={ contentStyle }>
            <ExamCard examTest={ questions && questions[ current ] } question_index={ current }/>
        </div>
        <div
            style={ {
                marginTop: 24,
            } }
        >
            {questions && current < questions?.length - 1 && (
                <Button disabled={ !selectedAnswer?.answer } type="primary" onClick={ () => next() }>
                    Next
                </Button>
            ) }
            {questions && current === questions?.length - 1 && (
                <Button disabled={ !selectedAnswer?.answer } type="primary" onClick={ () => done() }>
                    Done
                </Button>
            ) }
            { current > 0 && (
                <Button
                    style={ {
                        margin: '0 8px',
                    } }
                    onClick={ () => prev() }
                >
                    Previous
                </Button>
            ) }
        </div>
    </div>
}


export default ExamTest
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/logicTest.module.scss"
import { useParams } from "react-router";
import { LogicTestTimer } from "./timer";
import { Button, message, Steps, theme } from 'antd';
import LogicTestCard from "./card";
import { addAnswer, changeAnswer, clearSelectedAnswer, selectAnswer } from "../../../Redux/Slices/logicTest";


const LogicTest = () => {
    const dispatch = useDispatch()
    const params = useParams()
    // console.log(params.id)
    const logicTests = useSelector( state => state.logicTest.steps )
    const answers = useSelector( state => state.logicTest.answers )
    const { token } = theme.useToken();
    const [ current, setCurrent ] = useState( 0 );
    const selectedAnswer = useSelector( state => state.logicTest.selected_answer )

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60)

    useEffect( () => {
        if ( answers[ current ] ) {
            dispatch( selectAnswer( answers[ current ] ) )
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
        dispatch( selectAnswer( answers.filter( answer => answer.id === logicTests[ current - 1 ].id )[ 0 ] ) )
    };

    const done = () => {
        console.log([...answers, selectedAnswer], "<--------------------------- SELECTED ANSWER")
    };

    const items = logicTests.map( ( item ) => ( {
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
        <div className={styles.timer}>
            <LogicTestTimer expiryTimestamp={time} />
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Steps type="inline" current={ current } items={ items }/>
        </div>
        <div style={ contentStyle }>
            <LogicTestCard logicTest={ logicTests[ current ] } question_index={ current }/>
        </div>
        <div
            style={ {
                marginTop: 24,
            } }
        >
            { current < logicTests.length - 1 && (
                <Button disabled={ !selectedAnswer?.answer } type="primary" onClick={ () => next() }>
                    Next
                </Button>
            ) }
            { current === logicTests.length - 1 && (
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


export default LogicTest
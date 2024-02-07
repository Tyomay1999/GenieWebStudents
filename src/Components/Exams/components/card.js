import React from "react";
import { Card } from 'antd';
import { Radio } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../../../Redux/Slices/exams";


const ExamCard = ( { examTest, question_index } ) => {
    const dispatch = useDispatch()
    const selectedAnswer = useSelector(state => state.exams.selected_answer)

    const onChange = ( e ) => {
        dispatch(selectAnswer({
            id: examTest.id,
            questionTitle: examTest.questionTitle,
            question: examTest.question,
            answer: examTest.answers[ e.target.value - 1],
            answer_index: e.target.value,
            question_index
        }))
    };
    return <>
        <Card
            title={ examTest.questionTitle }
            bordered={ true }
            style={ {
                // width: "100%",
                height: "100%",
                maxWidth: "500px",
                minHeight: "300px",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            } }>
            <div>
                <p style={ { marginBottom: "15px", fontWeight: "bold" } }>
                    { examTest.question }
                </p>
                <Radio.Group
                    style={ {
                        display: "flex",
                        flexDirection: "column",
                    } }
                    onChange={ onChange }
                    value={ selectedAnswer?.answer_index || 0 }
                >
                    {
                        examTest.answers.map( ( answer, index ) => {
                            return <Radio key={ uuidv4() } value={ index + 1 }>{ answer }</Radio>
                        } )
                    }
                </Radio.Group>
            </div>
        </Card>
    </>
}


export default ExamCard
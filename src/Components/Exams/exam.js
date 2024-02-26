import React, { useEffect, useState } from "react";
import styles from "./styles/exam.module.scss"
import { Breadcrumb, Layout, theme, Typography, Card } from 'antd';
import time_SVG from "../../Assets/Exam/time.svg"
import level_SVG from "../../Assets/Exam/level.svg"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { changeExamStatus, getExams } from "../../Redux/Slices/Exams/exams";
import { useNavigate } from "react-router";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;


const handlerExamUrl = ( exam ) => {
    return `/exam/${ exam?.key || "check-here" }`
}


const Exam = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // TODO Check Loading
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( false );

    const exams = useSelector( state => state.exams.all )


    useEffect( () => {
        dispatch( getExams() )
    }, [] )


    const onChange = ( checked ) => {
        setLoading( !checked );
    };

    return <div className={ styles.container }>
        <Layout
            style={ {
                minHeight: '100vh'
            } }
        >
            <Layout>
                <Header
                    style={ {
                        padding: 0,
                        background: colorBgContainer,
                    } }
                >
                    <h1 style={ { margin: 0, fontSize: "25px", textAlign: "center" } }>
                        Exams
                    </h1>
                </Header>
                <Content
                    style={ {
                        margin: '0 16px',
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingTop: "25px"
                    } }
                >
                    <Breadcrumb
                        style={ {
                            margin: '16px 0',
                            width: "100%"
                        } }
                    >
                        <Breadcrumb.Item>GenieWeb</Breadcrumb.Item>
                        <Breadcrumb.Item>Exams</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={ {
                            padding: 24,
                            minHeight: "80vh",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            maxWidth: "1200px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between"
                        } }
                    >
                        <Card
                            title="Tests"
                            style={ { width: "100%", textAlign: "center", marginTop: "20px" } }
                        >
                            <div style={ {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between"
                            } }>

                                {
                                    exams.map( exam => {
                                        return <Card
                                            key={ uuidv4() }
                                            extra={ <h1 onClick={ () => {
                                                navigate( handlerExamUrl( exam ) )
                                                dispatch( changeExamStatus( "visited" ) )
                                            } } style={ {
                                                cursor: "pointer",
                                                fontSize: "15px",
                                                color: "#1677ff"
                                            } }>Start</h1> }
                                            title={ exam?.name }
                                            style={ { width: "350px", textAlign: "center", margin: "20px" } }
                                        >
                                            <div style={ { display: "flex", justifyContent: "space-between" } }>
                                                <div style={ { width: "100px", height: "100px" } }>
                                                    <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                                         src={ exam?.icon } alt={ exam?.name }/>
                                                </div>
                                                <div style={ {
                                                    width: "200px",
                                                    height: "100px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexDirection: "column"
                                                } }>
                                                    <Paragraph
                                                        style={ { display: "flex", alignItems: "center" } }
                                                    >
                                                        <img style={ { width: "25px", height: "25px" } }
                                                             src={ level_SVG } alt="level"/>
                                                        <span
                                                            style={ { margin: "0 10px 0 5px" } }>:</span>{ exam?.level }
                                                    </Paragraph>
                                                    <Paragraph
                                                        style={ { display: "flex", alignItems: "center" } }
                                                    >
                                                        <img style={ { width: "25px", height: "25px" } }
                                                             src={ time_SVG } alt="time"/>
                                                        <span
                                                            style={ { margin: "0 10px 0 5px" } }>:</span>
                                                        { exam?.duration } { exam.duration_format && exam.duration_format[ 0 ] }
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Card>
                                    } )
                                }
                            </div>
                        </Card>
                    </div>
                </Content>
                <Footer
                    style={ {
                        textAlign: 'center',
                    } }
                >
                    { new Date().getFullYear() }. | GenieWeb. | All rights reserved.
                </Footer>
            </Layout>
        </Layout>
    </div>
}


export default Exam
import React, { useState } from "react";
import styles from "./styles/exam.module.scss"
import { Breadcrumb, Layout, theme, Typography, Card } from 'antd';
import html_SVG from "../../Assets/Student/html.svg"
import time_SVG from "../../Assets/Exam/time.svg"
import level_SVG from "../../Assets/Exam/level.svg"
import css_SVG from "../../Assets/Student/css.svg"
import js_SVG from "../../Assets/Student/js.svg"
import email_SVG from "../../Assets/ContactUS/email.svg";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;


const Exam = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // TODO Check Loading
    const [ loading, setLoading ] = useState( false );
    const onChange = ( checked ) => {
        setLoading( !checked );
    };


    return <div className={ styles.main }>
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
                    } }
                >
                    <Breadcrumb
                        style={ {
                            margin: '16px 0',
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
                                justifyContent: "center"
                            } }>
                                <Card
                                    extra={<a href="#">Start</a>}
                                    title="HTML"
                                    style={ { width: "350px", textAlign: "center", margin: "20px" } }
                                >
                                    <div style={ { display: "flex", justifyContent: "space-between" } }>
                                        <div style={ { width: "100px", height: "100px" } }>
                                            <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                                 src={ html_SVG } alt="Html"/>
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
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>Easy
                                            </Paragraph>
                                            <Paragraph
                                                style={ { display: "flex", alignItems: "center" } }
                                            >
                                                <img style={ { width: "25px", height: "25px" } }
                                                     src={ time_SVG } alt="time"/>
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>30m
                                            </Paragraph>
                                        </div>
                                    </div>
                                </Card>

                                <Card
                                    extra={<a href="#">Start</a>}
                                    title="CSS"
                                    style={ { width: "350px", textAlign: "center", margin: "20px" } }
                                >
                                    <div style={ { display: "flex", justifyContent: "space-between" } }>
                                        <div style={ { width: "100px", height: "100px" } }>
                                            <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                                 src={ css_SVG } alt="Css"/>
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
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>Medium
                                            </Paragraph>
                                            <Paragraph
                                                style={ { display: "flex", alignItems: "center" } }
                                            >
                                                <img style={ { width: "25px", height: "25px" } }
                                                     src={ time_SVG } alt="time"/>
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>45m
                                            </Paragraph>
                                        </div>
                                    </div>
                                </Card>

                                <Card
                                    extra={<a href="#">Start</a>}
                                    title="JavaScript"
                                    style={ { width: "350px", textAlign: "center", margin: "20px" } }
                                >
                                    <div style={ { display: "flex", justifyContent: "space-between" } }>
                                        <div style={ { width: "100px", height: "100px" } }>
                                            <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                                 src={ js_SVG } alt="JavaScript"/>
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
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>Medium
                                            </Paragraph>
                                            <Paragraph
                                                style={ { display: "flex", alignItems: "center" } }
                                            >
                                                <img style={ { width: "25px", height: "25px" } }
                                                     src={ time_SVG } alt="time"/>
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>45m
                                            </Paragraph>
                                        </div>
                                    </div>
                                </Card>

                                <Card
                                    extra={<a href="#">Start</a>}
                                    title="JavaScript"
                                    style={ { width: "350px", textAlign: "center", margin: "20px" } }
                                >
                                    <div style={ { display: "flex", justifyContent: "space-between" } }>
                                        <div style={ { width: "100px", height: "100px" } }>
                                            <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                                 src={ js_SVG } alt="JavaScript"/>
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
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>Hard
                                            </Paragraph>
                                            <Paragraph
                                                style={ { display: "flex", alignItems: "center" } }
                                            >
                                                <img style={ { width: "25px", height: "25px" } }
                                                     src={ time_SVG } alt="time"/>
                                                <span style={ { margin: "0 10px 0 5px" } }>:</span>1h
                                            </Paragraph>
                                        </div>
                                    </div>
                                </Card>
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
import React, { useState } from "react";
import style from "./styles/student.module.scss"
import { Avatar, Breadcrumb, Layout, Menu, theme, Typography, Card, Skeleton, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SmileFilled, SmileOutlined } from '@ant-design/icons';
import student_PNG from "../../Assets/Student/student.png"
import frontEnd_PNG from "../../Assets/Student/front-end.png"
import html_SVG from "../../Assets/Student/html.svg"
import css_SVG from "../../Assets/Student/css.svg"
import javaScript_SVG from "../../Assets/Student/js.svg"

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;


const Student = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // TODO Check Loading
    const [ loading, setLoading ] = useState( false );
    const onChange = ( checked ) => {
        setLoading( !checked );
    };


    return <div className={ style.main }>
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
                        Student
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
                        <Breadcrumb.Item>Student</Breadcrumb.Item>
                        <Breadcrumb.Item>info</Breadcrumb.Item>
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
                            style={ {
                                padding: "10px 0",
                                width: 400,
                                maxHeight: 200,
                                marginTop: 16,
                            } }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                            <Skeleton loading={ loading } avatar active>
                                {/* <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                                title="Card title"
                                description="This is the description"
                            /> */ }
                                <div style={ {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                } }>
                                    <div style={ {
                                        marginRight: "10px",
                                        width: "100px",
                                        padding: "5px",
                                        border: "2px solid gray",
                                        borderRadius: "80px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    } }>
                                        <Avatar style={ { width: "80px", height: "80px", objectFit: "cover" } }
                                                src={ student_PNG }/>
                                    </div>
                                    <div style={ { display: "flex", flexDirection: "column" } }>
                                        <Title level={ 4 }>Artyom Bordulanyuk</Title>
                                        <Paragraph
                                            copyable={ { text: 'artyom.bordulanyuk@gmail.com' } }>artyom.bordulanyuk@gmail.com</Paragraph>
                                        <a href="tel: +37491730250"
                                           style={ { color: "black", textDecoration: "none", fontSize: "18px" } }>+374
                                            (91)73-05-50</a>
                                    </div>
                                </div>
                            </Skeleton>
                        </Card>
                        <Card
                            style={ {
                                width: 400,
                                marginTop: 10,
                                height: 200,
                            } }
                        >
                            <Skeleton loading={ loading } active>
                                <div style={ {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                } }>
                                    <div style={ {
                                        marginRight: "10px",
                                        width: "100px",
                                        padding: "5px",
                                        border: "2px solid gray",
                                        borderRadius: "80px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: "15px"
                                    } }>
                                        <Avatar style={ { width: "80px", height: "80px", objectFit: "cover" } }
                                                src={ frontEnd_PNG }/>
                                    </div>
                                    <div style={ { display: "flex", flexDirection: "column" } }>
                                        <Title level={ 4 }>Front-end developer</Title>
                                    </div>
                                </div>
                            </Skeleton>
                        </Card>
                        <Card
                            title="Lessons"
                            style={ { width: "100%", textAlign: "center", marginTop: "20px" } }
                        >
                            <Card style={ { marginTop: "10px" } }>
                                <div style={ { width: "100%", display: "flex", justifyContent: "space-between" } }>
                                    <div style={ { width: "70px", height: "70px" } }>
                                        <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                             src={ html_SVG } alt="html"/>
                                    </div>

                                    <div style={ { display: "flex", alignItems: "center" } }>
                                        <Title level={ 4 }>Html</Title>
                                    </div>

                                    <div style={ { display: "flex", alignItems: "center" } }>
                                        <Title level={ 4 } style={ { color: "green" } }>Compilated</Title>
                                    </div>
                                </div>
                            </Card>

                            <Card style={ { marginTop: "10px" } }>
                                <div style={ { width: "100%", display: "flex", justifyContent: "space-between" } }>
                                    <div style={ { width: "70px", height: "70px" } }>
                                        <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                             src={ css_SVG } alt="css"/>
                                    </div>

                                    <div style={ { display: "flex", alignItems: "center" } }>
                                        <Title level={ 4 }>Css</Title>
                                    </div>

                                    <div style={ { display: "flex", alignItems: "center" } }>
                                        <Title level={ 4 }>In progress</Title>
                                    </div>
                                </div>
                            </Card>

                            <Card style={ { marginTop: "10px" } }>
                                <div style={ { width: "100%", display: "flex", justifyContent: "space-between" } }>
                                    <div style={ { width: "70px", height: "70px" } }>
                                        <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                             src={ javaScript_SVG } alt="JavaScript"/>
                                    </div>

                                    <div style={ { display: "flex", alignItems: "center" } }>
                                        <Title level={ 4 }>JavaScript</Title>
                                    </div>

                                    <div style={ { display: "flex", alignItems: "center" } }>
                                        <Title level={ 4 } style={ { color: "gray" } }>Waiting</Title>
                                    </div>
                                </div>
                            </Card>
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


export default Student
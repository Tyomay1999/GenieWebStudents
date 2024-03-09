import React, { useState } from "react";
import style from "./styles/student.module.scss"
import { Avatar, Breadcrumb, Layout, Menu, theme, Typography, Card, Skeleton } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;


const Student = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    // TODO Check Loading
    const [ loading, setLoading ] = useState( false );
    const student = useSelector( state => state.students.student )


    const onChange = ( checked ) => {
        setLoading( !checked );
    };

    //TODO create upload image
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
                        <Breadcrumb.Item>Student</Breadcrumb.Item>
                        <Breadcrumb.Item>info</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={ {
                            padding: 24,
                            minHeight: "80vh",
                            maxWidth: "1200px",
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
                                                src={ student?.image }/>
                                    </div>
                                    <div style={ { display: "flex", flexDirection: "column" } }>
                                        <Title level={ 4 }>{ student?.name } { student?.lastName }</Title>
                                        <Paragraph
                                            copyable={ { text: student?.email } }>
                                            <a href={ `mailto:${ student?.email }` }
                                               style={ { color: "black", textDecoration: "none", fontSize: "18px" } }>
                                                { student?.email }
                                            </a>
                                        </Paragraph>
                                        {
                                            student?.phone ?
                                                <a href={ `tel:0${ student.phone }` }
                                                   style={ {
                                                       color: "black",
                                                       textDecoration: "none",
                                                       fontSize: "18px"
                                                   } }>
                                                    +374 { student.phone }
                                                </a> : <></>
                                        }
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
                                                    src={ //TODO check here
                                                        student?.image
                                                    }/>
                                        </div>
                                        <div style={ { display: "flex", flexDirection: "column" } }>
                                            <Title
                                                level={ 4 }>{ student?.teacher?.name } { student?.teacher?.lastName }</Title>
                                            {
                                                student?.teacher?.email ?
                                                    <Paragraph
                                                        copyable={ { text: student.teacher.email } }>
                                                        <a href={ `mailto:${ student.teacher.email }` }
                                                           style={ {
                                                               color: "black",
                                                               textDecoration: "none",
                                                               fontSize: "18px"
                                                           } }>
                                                            { student.teacher.email }
                                                        </a>
                                                    </Paragraph> : <></>
                                            }
                                            {
                                                student?.teacher?.phone ?
                                                    <a href={ `tel:0${ student.teacher.phone }` }
                                                       style={ {
                                                           color: "black",
                                                           textDecoration: "none",
                                                           fontSize: "18px"
                                                       } }>
                                                        +374 { student.teacher.phone }
                                                    </a> : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Skeleton>
                        </Card>
                        <Card
                            title={ student?.position || "Position" }
                            style={ { width: "100%", textAlign: "center", marginTop: "20px" } }
                        >
                            {
                                student?.lessons?.map( lesson => {
                                    return <Card key={ uuidv4() } style={ { marginTop: "10px" } }>
                                        <div style={ {
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between"
                                        } }>
                                            <div style={ { width: "70px", height: "70px" } }>
                                                <img style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                                     src={ lesson.icon } alt="html"/>
                                            </div>

                                            <div style={ { display: "flex", alignItems: "center" } }>
                                                <Title level={ 4 }>{ lesson.name }</Title>
                                            </div>

                                            <div style={ { display: "flex", alignItems: "center" } }>
                                                <Title level={ 4 }
                                                       style={
                                                           lesson.status === "Complicated" ?
                                                               { color: "green" } : lesson.status === "Waiting" ?
                                                                   { color: "gray" } : { color: "black" }
                                                       }>{ lesson.status }</Title>
                                            </div>
                                        </div>
                                    </Card>
                                } )
                            }
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
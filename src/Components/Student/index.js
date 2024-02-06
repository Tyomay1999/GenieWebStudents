import React from "react";
import style from "./styles/student.module.scss"
import { Avatar, Breadcrumb, Layout, Menu, theme,Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;




const Student = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return <div className={style.main}>
        <Layout
            style={ {
                minHeight: '100vh',
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
                        Student name
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
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        } }
                    >

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
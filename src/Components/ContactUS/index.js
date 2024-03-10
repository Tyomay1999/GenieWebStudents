import React, { useState } from "react";
import style from "./styles/contactUS.module.scss"
import { Avatar, Breadcrumb, Layout, Menu, theme, Typography, Card, Skeleton, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SmileFilled, SmileOutlined } from '@ant-design/icons';
import viber_SVG from "../../Assets/ContactUS/viber.svg"
import whatsapp_SVG from "../../Assets/ContactUS/whatsapp.svg"
import mobile_SVG from "../../Assets/ContactUS/mobile.svg"
import email_SVG from "../../Assets/ContactUS/email.svg"
import { Instagram, Linkedin, Telegram, TikTok, Youtube } from "../Common/socials";


const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;


const ContactUS = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
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
                        Contact US
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
                            title="Information"
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
                                    title="Phone"
                                    style={ { width: "380px", textAlign: "center", margin: "20px" } }
                                >
                                    <Paragraph
                                        style={ { display: "flex", alignItems: "center" } }
                                        copyable={ { text: 'artyom.bordulanyuk@gmail.com' } }
                                    >
                                        <img style={ { width: "25px", height: "25px", marginRight: "10px" } }
                                             src={ viber_SVG } alt="viber"/>
                                        +374 (91)73-05-50
                                    </Paragraph>
                                    <Paragraph
                                        style={ { display: "flex", alignItems: "center" } }
                                        copyable={ { text: 'artyom.bordulanyuk@gmail.com' } }
                                    >
                                        <img style={ { width: "25px", height: "25px", marginRight: "10px" } }
                                             src={ whatsapp_SVG } alt="whatsapp"/>
                                        +374 (91)73-05-50
                                    </Paragraph>
                                    <a
                                        href="tel: +37491730250"
                                        style={ {
                                            display: "flex",
                                            alignItems: "center",
                                            color: "black",
                                            maxWidth: "200px",
                                            textDecoration: "none",
                                        } }
                                    >
                                        <img style={ { width: "25px", height: "25px", marginRight: "10px" } }
                                             src={ mobile_SVG } alt="Mobile"/>
                                        +374 (91)73-05-50
                                    </a>
                                </Card>
                                <Card
                                    title="Email"
                                    style={ { width: "380px", textAlign: "center", margin: "20px" } }
                                >
                                    <Paragraph
                                        style={ { display: "flex", alignItems: "center" } }
                                        copyable={ { text: 'info@genieweb.org' } }
                                    >
                                        <img style={ { width: "25px", height: "25px", marginRight: "10px" } }
                                             src={ email_SVG } alt="email"/>
                                        info@genieweb.org
                                    </Paragraph>
                                    <Paragraph
                                        style={ { display: "flex", alignItems: "center" } }
                                        copyable={ { text: 'students@genieweb.org' } }
                                    >
                                        <img style={ { width: "25px", height: "25px", marginRight: "10px" } }
                                             src={ email_SVG } alt="email"/>
                                        students@genieweb.org
                                    </Paragraph>
                                </Card>
                                <Card
                                    title="Socials"
                                    style={ { width: "380px", textAlign: "center", margin: "20px" } }
                                >
                                    <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-evenly"}} >
                                        <Instagram height={"30px"} width={"30px"} />
                                        <Youtube height={"30px"} width={"30px"} />
                                        <Linkedin height={"30px"} width={"30px"} />
                                        <TikTok height={"30px"} width={"30px"} />
                                        <Telegram height={"30px"} width={"30px"} />
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


export default ContactUS
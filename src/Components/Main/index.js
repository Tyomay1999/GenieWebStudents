import style from "./styles/main.module.scss"
import React, { useEffect, useState } from 'react';
import {
    AntDesignOutlined,
    UserOutlined,
    InfoCircleFilled,
    HourglassOutlined,
    MessageOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import Student from "../Student";
import InfoMessage from "../Info/info";
import ContactUS from "../ContactUS";
import Exam from "../Exams/exam";
import { useDispatch, useSelector } from "react-redux";
import { checkAccount } from "../../Redux/Slices/auth";
import { useNavigate } from "react-router";
import Logout from "../Auth/logoutMessage";
import { getStudentInfo } from "../../Redux/Slices/students";
import UnPhysicalCert from "../Modal";
import Loading from "../Loading";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;


function getItem( label, key, icon, selectItemOfMenu, physicalCert, children ) {
    return {
        key,
        icon,
        children,
        label,
        onClick: () => {
            if ( physicalCert ) {
                selectItemOfMenu( label )
            }
        }
    };
}


const Main = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ collapsed, setCollapsed ] = useState( true );
    const [ selectedMenuItem, selectItemOfMenu ] = useState( "Student" );
    const student = useSelector( state => state.students.student )
    const { physicalCert } = student


    useEffect( () => {
        dispatch( getStudentInfo() )
        dispatch( checkAccount( navigate ) )
    }, [ dispatch ] )


    const items = [
        getItem( 'Student', '1', <UserOutlined/>,  selectItemOfMenu, physicalCert ),
        getItem( 'Messages', '2', <MessageOutlined/>,  selectItemOfMenu, physicalCert ),
        getItem( 'Info', '3', <InfoCircleFilled/>,  selectItemOfMenu, physicalCert ),
        getItem( 'Exams', '4', <HourglassOutlined/>,  selectItemOfMenu, physicalCert ),
        getItem( 'Logout', '5', <LogoutOutlined/>,  selectItemOfMenu, physicalCert ),
        // getItem( 'User', 'sub1', <UserOutlined/>, [
        //     getItem( 'Tom', '3' ),
        //     getItem( 'Bill', '4' ),
        //     getItem( 'Alex', '5' ),
        // ] )
    ];

    return (
        <Layout
            style={ {
                minHeight: '100vh',
            } }
        >
            <Sider
                style={ {
                    position: collapsed ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    minHeight: "100vh",
                } }
                collapsible collapsed={ collapsed } onCollapse={ ( value ) => setCollapsed( value ) }>
                <div className="demo-logo-vertical"/>
                <div className={ style.avatar_wrapper }>
                    <Avatar
                        style={ !collapsed ? { display: "none" } : { display: "flex" } }
                        size={ { xs: 50, sm: 55, md: 55, lg: 55, xl: 65, xxl: 90 } }
                        icon={ <AntDesignOutlined/> }
                    />
                    <Title style={ collapsed ? { display: "none" } : { color: "white" } }>Genie Web</Title>
                </div>
                <Menu theme="dark" defaultSelectedKeys={ [ '1' ] } mode="inline" items={ items }/>
            </Sider>

            {
                selectedMenuItem === "Student" ? <Student/> :
                    selectedMenuItem === "Messages" ? <InfoMessage/> :
                        selectedMenuItem === "Info" ? <ContactUS/> :
                            selectedMenuItem === "Exams" ? <Exam/> :
                                selectedMenuItem === "Logout" ?
                                    <Logout cancel={ () => selectItemOfMenu( "Student" ) }/> : <></>
            }
            <UnPhysicalCert/>
            <Loading />
        </Layout>
    );
};
export default Main;
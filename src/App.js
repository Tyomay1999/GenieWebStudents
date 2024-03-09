import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Exams from "./Components/Exams";
import Main from "./Components/Main";
import Auth from "./Components/Auth/auth";
import QR from "./Components/QR";
import StudentVerification from "./Components/QR/components/verifyStudent";
import ForgotPassword from "./Components/Auth/forgotPassword";
import ResetStudentPassword from "./Components/Auth/resetPassword";
import UnPhysicalCert from "./Components/Modal";
import InfoPages from "./Components/InfoPages";
import Greeting from "./Components/Greeting";


const App = () => {
    const allRoutes = [
        { id: 0, path: "/auth", element: <Auth/>, name: "Auth" },
        { id: 1, path: "/home", element: <Main/>, name: "main" },
        { id: 1, path: "/", element: <Greeting/>, name: "Greeting" },
        { id: 2, path: "/exam/:token", element: <Exams/>, name: "Exams" },
        { id: 2, path: "/exam/logic/:token", element: <Exams is_logic_test={ true }/>, name: "Logic Test" },
        { id: 3, path: "/qr/:id", element: <QR/>, name: "qr" },
        { id: 4, path: "/verify/:token", element: <StudentVerification/>, name: "Student verification" },
        { id: 5, path: "/forgot", element: <ForgotPassword/>, name: "Forgot Password" },
        { id: 6, path: "/reset/:token", element: <ResetStudentPassword/>, name: "Reset Password" },
        { id: 7, path: "/info/:type", element: <InfoPages />, name: "Info pages" },
        { id: 8, path: "/*", element: <InfoPages />, name: "Redirect ;)" },
    ]

    return (
        <div style={ { background: "whitesmoke" } }>
            <Routes>
                { allRoutes.map( ( route ) => {
                    return (
                        <Route key={ route.id } path={ route.path } element={ route.element }/>
                    );
                } ) }
            </Routes>
        </div>
    );
}

export default App;

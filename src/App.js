import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Exams from "./Components/Exams";
import Main from "./Components/Main";
import Auth from "./Components/Auth/auth";
import QR from "./Components/QR";
import StudentVerification from "./Components/QR/components/verifyStudent";


const App = () => {
    const allRoutes = [
        { id: 0, path: "/auth", element: <Auth/>, name: "Auth" },
        { id: 1, path: "/", element: <Main/>, name: "main" },
        { id: 2, path: "/exam/:lesson/:level/:token", element: <Exams/>, name: "Exams" },
        { id: 3, path: "/qr/:id", element: <QR/>, name: "qr" },
        { id: 4, path: "/verify/:token", element: <StudentVerification/>, name: "Student verification" },
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

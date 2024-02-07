import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Exams from "./Components/Exams";
import Main from "./Components/Main";
import Auth from "./Components/Auth/auth";


const App = () => {
    const allRoutes = [
        { id: 0, path: "/auth", element: <Auth/>, name: "Auth" },
        { id: 1, path: "/", element: <Main/>, name: "main" },
        { id: 2, path: "/logic-test/:id", element: <Exams/>, name: "Exams" },
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

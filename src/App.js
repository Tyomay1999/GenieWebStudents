import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import LogicTestMain from "./Components/LogicTest";
import Main from "./Components/Main";
import Student from "./Components/Student";


const App = () => {
    const allRoutes = [
        // { id: 1, path: "/auth", element: <Auth/>, name: "Auth" },
        { id: 1, path: "/", element: <Main/>, name: "main" },
        { id: 2, path: "/logic-test/:id", element: <LogicTestMain/>, name: "Logic test" },
        { id: 2, path: "/student", element: <Student/>, name: "Student" },
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

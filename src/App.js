import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import LogicTestMain from "./Components/LogicTest";


const App = () => {
    const allRoutes = [
        // { id: 1, path: "/auth", element: <Auth/>, name: "Auth" },
        { id: 1, path: "/", element: <div>MAIN ROUTE</div>, name: "main" },
        { id: 2, path: "/logic-test/:id", element: <LogicTestMain />, name: "Logic test" },
    ]

    return (
        <div style={{  background: "whitesmoke"}}>
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

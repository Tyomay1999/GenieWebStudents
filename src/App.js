import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";


const App = () => {
    const allRoutes = [
        // { id: 1, path: "/auth", element: <Auth/>, name: "Auth" },
        { id: 2, path: "/logic-test/:id", element: <div>MAIN ROUTE</div>, name: "main" },
    ]

    return (
        <div>
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

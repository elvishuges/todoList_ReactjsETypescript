import React, { lazy, FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// const Home = lazy(() =>
//     import('./../pages/home')
//         .then(({ Home }) => ({ default: Home })),
// );

import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import Login from "../pages/login";

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} ></Route>
                <Route path="/dashboard" component={Dashboard} ></Route>
                <Route path="/login" component={Login} ></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes
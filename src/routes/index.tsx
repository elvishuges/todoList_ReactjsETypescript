import React, { lazy, FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// const Home = lazy(() =>
//     import('./../pages/home')
//         .then(({ Home }) => ({ default: Home })),
// );

import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import Todo from "../pages/todo";
import Login from "../pages/login";

const homeAdminRoutes = [
    {
        path: "/dashboard",
        exact: true,
        sidebar: () => <Home />,
        main: () => <Dashboard />
    },
    {
        path: "/todo",
        exact: true,
        sidebar: () => <Home />,
        main: () => <Todo />
    },
];

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} ></Route>
                <Route path="/login" component={Login} ></Route>
            </Switch>
            <Switch>
                {homeAdminRoutes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.sidebar />}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes
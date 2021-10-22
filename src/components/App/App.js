import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import OrderPage from "../OrderPage/OrderPage";

const App = () => (
    <Router>
        <Switch>
            <Route
                path="/"
                exact
            >
                <MainPage />
            </Route>
            <Route path="/orderPage">
                <OrderPage />
            </Route>
        </Switch>
    </Router>
)

export default App;
import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import OrderPage from "../OrderPage/OrderPage";
import ResultPage from "../ResultPage/ResultPage";

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
            <Route path="/order/:id">
                <ResultPage />
            </Route>
        </Switch>
    </Router>
)

export default App;
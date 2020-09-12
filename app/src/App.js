import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Global, css } from "@emotion/core";
import Home from "./pages/Home";

export default function App() {
    return (
        <Router>
            <Global
                styles={css`
                    a {
                        text-decoration: none;
                        color: white;
                    }
                    body {
                        margin: 0;
                        color: white;
                    }
                    .container {
                        width: 100%;
                        max-width: 800px;
                        padding: 0 40px;
                    }
                `}
            />
            <Home />
            <Switch>
                {/* <Route path="/about">
                    <About />
                </Route> */}
                {/* <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route> */}
            </Switch>
        </Router>
    );
}

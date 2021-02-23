import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./Login_page/Login";
import ProjectView from "./ProjectView/ProjectView";

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage}/>
                {/* <Route path="*" component={LandingPage} /> */}
            </BrowserRouter>
        )
    }
}
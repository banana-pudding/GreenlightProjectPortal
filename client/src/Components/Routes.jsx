import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./Login_page/Login";
import CreatePage from "./CreateProject/create";
import EditPage from "./EditProject/edit";
import PageNotFound404 from "./PageNotFound404/PageNotFound404";
import ProjectView from "./ProjectView/ProjectView";

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/create" component={CreatePage}/>
                    <Route exact path="/edit" component={EditPage}/>
                    <Route exact path="/project-view" component={ProjectView} />
                    <Route exact path="/404" component={PageNotFound404} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}

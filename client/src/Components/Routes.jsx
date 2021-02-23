import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./Login_page/Login";
import CreatePage from "./CreateProject/create";
import EditPage from "./EditProject/edit";

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage}/>
		<Route exact path="/create" component={CreatePage}/>
                <Route exact path="/edit" component={EditPage}/>
                {/* <Route path="*" component={LandingPage} /> */}
            </BrowserRouter>
        )
    }
}

import React from "react";
import './LandingPage.css';
// import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

export default class LandingPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: "",
    //         password: "",
    //         remember: false,
    //         user: {},
    //         isLoggedIn: false
    //     }
    // }

    // handleUsername = (event) => {
    //     this.setState({username: event.target.value})
    // }

    // handlePassword = (event) => {
    //     this.setState({password: event.target.value})
    // }

    // handleRemember = (event) => {
    //     this.setState({remember: !this.state.remember})
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     let user = {
    //         username: this.state.username,
    //         password: this.state.password,
    //         remember: this.state.remember
    //     }

    //     alert(`Submitting form:\n\nUsername: ${user.username}\nPassword: ${user.password}\nRemember: ${user.remember}`);
    // }

    render() {
        return (
            <div id={"landingpage-container"}>
                <div className={"hero-image"} style={{backgroundImage: `url("${process.env.PUBLIC_URL }/landing_page_background.png")`}}>
                    <div id={"hero-banner"}></div>
                    <h1 id={"hero-text"}>Project Greenlight</h1>
                </div>
                <div id={"about-section"}>
                    <h2>About Project Greenlight</h2>
                    <p>The UNT Greenlight Projects Portal works to serve as a central hub for a repository of carefully curated project concepts by UNT faculty and students.</p>
                </div>
                <div id={"projects-section"}></div>
                <div id={"howitworks-section"}></div>
            </div>
        )
    }
}
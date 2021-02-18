import React from "react";
import './LandingPage.css';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            remember: false,
            user: {},
            isLoggedIn: false
        }
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleRemember = (event) => {
        this.setState({remember: !this.state.remember})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            remember: this.state.remember
        }

        alert(`Submitting form:\n\nUsername: ${user.username}\nPassword: ${user.password}\nRemember: ${user.remember}`);
    }

    render() {
        return (
            <div className={"outer-container"}>

            </div>
        )
    }
}
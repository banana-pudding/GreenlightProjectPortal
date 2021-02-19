import React from "react";
import './login.css';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

export default class LoginPage extends React.Component {
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
            <div className={"login-outer-container"}>
                <div className={"login-image-container"}>
                    <img src={window.location.origin + "/unt_eagle_statue.png"} alt="UNT Eagle Statue" width="100%"/>
                </div>
                <div className={"login-form-container"}>
                    <div className={"inner-container"}>
                        <p className={"login-title"}>Login to the Greenlight Portal</p>
                        <p className={"login-subtitle"}>Must be part of the UNT System</p>
                        <div className={"login-form"}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup className={"login-text-field"}>
                                    <Input type="email" name="email" id="email" placeholder="UNT email" onChange={this.handleUsername}/>
                                </FormGroup>
                                <FormGroup className={"login-text-field"}>
                                    <Input type="password" name="password" id="password" placeholder="UNT Password" onChange={this.handlePassword}/>
                                </FormGroup>
                                <FormGroup check className={"login-remember"}>
                                    <Label check>
                                    <Input type="checkbox" onChange={this.handleRemember}/>{'  '}
                                    Remember Me
                                    </Label>
                                </FormGroup>
                                <Button style={{backgroundColor: "#008444"}} className={"login-button"} type="submit">Login</Button>
                            </Form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
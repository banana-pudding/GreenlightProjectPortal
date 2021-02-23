import React from "react";
import './login.css';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

/*  Class:      LoginPage
    Purpose:    Renders our login page and handles all of the functionality for the login page
*/
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

    /*  Function:       handleUsername
        Arguments:      event - html form event
        Return:         void
        Purpose:        maintains the state value with the value that is in the username input box
    */
    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }

    /*  Function:       handlePassword
        Arguments:      event - html form event
        Return:         void
        Purpose:        maintains the state value with the value that is in the password input box
    */
    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    /*  Function:       handleRemember
        Arguments:      event - html form event
        Return:         void
        Purpose:        maintains the state value with the true/false value corresponding to the "remember me" checkbox
    */
    handleRemember = (event) => {
        this.setState({remember: !this.state.remember})
    }

    /*  Function:       handleSubmit
        Arguments:      event - html form event
        Return:         void
        Purpose:        Creates the user object for logging in according to the information the user has entered.  It then
                        creates a login request to the API server and if the user credentials are valid, forwards to the 
                        projects page, otherwise it informs the user that they input invalid credentials.
    */
    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            remember: this.state.remember
        }

        alert(`Submitting form:\n\nUsername: ${user.username}\nPassword: ${user.password}\nRemember: ${user.remember}`);
    }


    //return the html for the page
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
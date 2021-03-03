import React from "react";
import './login.css';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { Redirect } from "react-router-dom";
import axios from "axios";

/*  Class:      LoginPage
    Purpose:    Renders our login page and handles all of the functionality for the login page
*/
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            euid: "",
            password: "",
            remember: false,
            user: props.user,
            isLoggedIn: false
        }
    }

    /*  Function:       handleEUID
        Arguments:      event - html form event
        Return:         void
        Purpose:        maintains the state value with the value that is in the EUID input box
    */
    handleEUID = (event) => {
        this.setState({euid: event.target.value})
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
                        makes a post request to the api to try and login the user.  If successful, sets the user object for the
                        session, if unsuccessful then informs the user.
    */
    handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8080/users/login", {
            euid: this.state.euid,
            password: this.state.password
        }).then((response) => {
            console.log(response.status);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    //return the html for the page
    render() {

        if(this.state.user) {
            return (
                <Redirect to="/project-view" />
            )
        }

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
                                    <Input type="text" name="euid" id="euid" placeholder="UNT EUID" onChange={this.handleEUID}/>
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
import React from "react";
import './login.css';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div className={"outer-container"}>
                <div className={"login-image-container"}>
                    image here
                </div>
                <div className={"login-form-container"}>
                    <div className={"inner-container"}>
                        <p className={"login-title"}>Login to the Greenlight Portal</p>
                        <p className={"login-subtitle"}>Must be part of the UNT System</p>
                        <div className={"login-form"}>
                            <Form>
                                <FormGroup className={"login-text-field"}>
                                    <Input type="email" name="email" id="email" placeholder="UNT email" />
                                </FormGroup>
                                <FormGroup className={"login-text-field"}>
                                    <Input type="password" name="password" id="password" placeholder="UNT Password" />
                                </FormGroup>
                                <FormGroup check className={"login-remember"}>
                                    <Label check>
                                    <Input type="checkbox" />{'  '}
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
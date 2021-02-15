import React from "react";

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
            <div>
                LOGGING IN YO
            </div>
        )
    }
}
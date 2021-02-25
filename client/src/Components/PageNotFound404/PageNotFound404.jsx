import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound404.css";

export default class PageNotFound404 extends React.Component {
    render() {
        return (
            <div className={"pagenotfound-outer-container"}>
                <h1>Page not found</h1>
                <Link to="/">Return Home</Link>
            </div>
        )
    }
}
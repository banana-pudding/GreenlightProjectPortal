import React from "react";
import './LandingPage.css';
// import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

export default class LandingPage extends React.Component {

    render() {
        return (
            <div id={"landingpage-container"}>
                <div className={"hero-image"} style={{backgroundImage: `url("${process.env.PUBLIC_URL }/landing_page_background.png")`}}>
                    <div id={"hero-banner"}></div>
                        <h1 id={"hero-text"}>Project Greenlight</h1>
                    </div>
                <div id={"about-section"}>
                    <h2>About Project Greenlight</h2>
                    <hr  style={{
                        color: '#008444',
                        backgroundColor: '#008444',
                        height: .5,
                        borderColor : '#008444',
                        width: "20%"
                    }}/>
                    <p>The UNT Greenlight Projects Portal works to serve as a central hub for a repository of carefully curated project concepts by UNT faculty and students.</p>
                    <hr  style={{
                        color: '#2B2B2B',
                        backgroundColor: '#2B2B2B',
                        height: 1,
                        borderColor : '#2B2B2B',
                        width: "80%",
                        opacity: 0.15
                    }}/>
                </div>
                <div id={"projects-section"}></div>
                <div id={"howitworks-section"}></div>
            </div>
        )
    }
}
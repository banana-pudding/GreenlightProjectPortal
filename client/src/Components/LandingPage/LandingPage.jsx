import React from "react";
import './LandingPage.css';
// import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

export default class LandingPage extends React.Component {

    render() {
        return (
            <div id={"landingpage-container"}>
                {/* Top image with text */}
                <div className={"hero-image"} style={{backgroundImage: `url("${process.env.PUBLIC_URL }/landing_page_background.png")`}}>
                    <div id={"hero-banner"}></div>
                    <h1 id={"hero-text"}>Project Greenlight</h1>
                </div>

                {/* About section  */}
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
                </div>
                <hr  style={{
                    color: '#2B2B2B',
                    backgroundColor: '#2B2B2B',
                    height: 1,
                    borderColor : '#2B2B2B',
                    width: "90%",
                    opacity: 0.15
                }}/>

                {/* Projects Section */}
                <div id={"projects-section"}>
                <h2>A place where great ideas meet great minds</h2>
                {/* FIXME add relavent content for this section */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Id ornare arcu odio ut sem nulla pharetra. Volutpat lacus laoreet non curabitur gravida.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Id ornare arcu odio ut sem nulla pharetra. Volutpat lacus laoreet non curabitur gravida.</p>
                </div>

                {/* How it works section */}
                <div id={"howitworks-section"}></div>
            </div>
        )
    }
}
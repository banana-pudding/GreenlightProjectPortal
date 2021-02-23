import React from "react";
import './Footer.css';

export default class Navbarcomp extends React.Component {

    render() {
        return (
            <div id={"footer"}>
                <div id={"blackbanner"}>
                    <div id={"leftside"}>
                        <img id={"footerlogo"} src={window.location.origin + "/Footer_logo.png"} alt="UNT footer logo"/>
                    </div>
                    <div id={"rightside"}>
                        <p>UNT Discovery Park</p>
                        <p>1155 Union Circle #310440 Denton, Texas 76203-5017</p>
                    </div>
                </div>
                <br/>
                <p>Disclaimer | AA/EOE | Privacy | Electronic Accessibility | Required Links | UNT Home</p>
                <p>@ Copyright stuff</p>
            </div>
        )
    }

}
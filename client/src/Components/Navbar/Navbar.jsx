import React from "react";
import './Navbar.css';
import {
    Button
  } from 'reactstrap';

export default class Navbarcomp extends React.Component {

    handleNavSlide = (event) => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        // toggling navbar
        nav.classList.toggle('nav-active');

        // link animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });

        // burger animation
        burger.classList.toggle('toggle');
    }

    render() {
        return (
            <div id={"navbar-container"}>
                <div className={"navbar"} expand="lg">
                    <a className={"navimg"} href="/"><img src={window.location.origin + "/UNT_Logo.png"} alt="UNT Eagle lgo" width="100%"/></a>
                    <div className="burger" onClick={this.handleNavSlide}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="/"> Home</a></li>
                        <li><a href="#projects">Projects</a> </li>
                        <li><a href="#Submit">Submit a Project</a></li>
                    </ul>
                        <Button id="navbutton" size="md" style={{backgroundColor:"#008444", border: "none"}} href="/login">Sign In</Button>
                </div>
            </div>
        )
    }
}

{/* <Navbar color="light" light expand="md">
    <NavbarBrand href="/"><img src={window.location.origin + "/UNT_Logo.png"} alt="UNT Eagle Statue" width="60%"/></NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
    <Nav className="mr-auto" navbar>
        <NavItem>
        <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            Options
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem>
            Option 1
            </DropdownItem>
            <DropdownItem>
            Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
            Reset
            </DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
    <NavbarText>Simple Text</NavbarText>
    </Collapse>
</Navbar> */}
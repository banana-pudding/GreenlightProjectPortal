import React from "react";
import './Navbar.css';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';

export default class Navbarcomp extends React.Component {

    render() {
        return (
            <div id={"navbar-container"}>
                <Navbar id={"navbar"} expand="lg">
                    <NavbarBrand href="/"><img src={window.location.origin + "/UNT_Logo.png"} alt="UNT Eagle lgo" width="100%"/></NavbarBrand>
                    <Nav className="ml-auto" navbar right>
                        <NavItem>
                        <NavLink className={"navlink"} href="#about-section">About</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className={"navlink"} href="#projects-section">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className={"navlink"} href="#howitworks-section">How It Works</NavLink>
                        </NavItem>
                        <NavItem>
                        <Button size="md" style={{backgroundColor:"#008444", border: "none"}} href="/login">Sign In</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
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
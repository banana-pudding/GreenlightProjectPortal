import React from "react";
import './edit.css';
import {Container, Form, FormGroup, Input, Label, Button, Row, Col} from 'reactstrap';

/*  Class:      EditPage
    Purpose:    Renders our edit project page and handles all of the functionality for the edit project page
*/

export default class EditPage extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            sponsor: "",
            contributors: "",
            github: "",
            recruiting: false,
            active: false,
            paused: false,
            stopped: false,
        }
    }

    /* Function:        handleRecruiting
        Arguments:      event - html form event
        Return:         void
        Purpose:        sets state when "recruiting" button is clicked
    */

    handleRecruiting = (event) => {
    	this.setState({recruiting: !this.state.recruiting})
    }

    /* Function:        handleActive
        Arguments:      event - html form event
        Return:         void
        Purpose:        sets state when "active" button is clicked
    */

    handleActive = (event) => {
    	this.setState({active: !this.state.active})
    }

    /* Function:        handlePaused
        Arguments:      event - html form event
        Return:         void
        Purpose:        sets state when "paused" button is clicked
    */

    handlePaused = (event) => {
    	this.setState({paused: !this.state.paused})
    }

    /* Function:        handleStopped
        Arguments:      event - html form event
        Return:         void
        Purpose:        sets state when "stopped" button is clicked
    */

    handleStopped = (event) => {
    	this.setState({stopped: !this.state.stopped})
    }

    //render page html
	render() {

		let recruiting_btn_class = this.state.recruiting ?  "projectView-status-button projectView-recruiting-outline": "projectView-status-button projectView-recruiting-filled";
		let active_btn_class = this.state.active ? "projectView-status-button projectView-active-outline": "projectView-status-button projectView-active-filled";
		let paused_btn_class = this.state.paused ? "projectView-status-button projectView-paused-outline": "projectView-status-button projectView-paused-filled";
		let stopped_btn_class = this.state.stopped? "projectView-status-button projectView-stopped-outline": "projectView-status-button projectView-stopped-filled";

		return (
			<div className = "edit-outer-container">
				<div className = "edit-form-container">
					<Container className = "themed-container shadow border border-med rounded">
						<div className = "title-container"> 
							<p className = "edit-title">Edit Project</p>
						</div>
						<div className = "edit-form">
							<Form>
								<FormGroup>
									<Label for = "title" className = "form-labels">Title</Label>
									<Input type = "title" name = "title" id = "title" placeholder = "My Project"/>
								</FormGroup>
								<FormGroup>
									<Label for = "description" className = "form-labels">Description</Label>
									<Input type = "textarea" name = "description" id = "description" placeholder = "Tell us what your project is all about."/>
								</FormGroup>
								<FormGroup>
									<Label for = "link" className = "form-labels">Github Link</Label>
									<Input type = "link" name = "link" id = "link" placeholder = "Enter the link to your Github repository."/>
								</FormGroup>
								<FormGroup>
									<Label for = "link" className = "form-labels">Contributors</Label>
									<p>we need to figure out how to do this</p>
								</FormGroup>
							</Form>

							{console.log(this.state.recruiting)}
							<p className = "form-labels">Project Status:</p>
							<div className = "button-container">
								<button className = {recruiting_btn_class} onClick = {this.handleRecruiting}>Recruiting</button>
								<button className = {active_btn_class} onClick = {this.handleActive}>Active</button>
								<button className = {paused_btn_class} onClick = {this.handlePaused}>Paused</button>
								<button className = {stopped_btn_class} onClick = {this.handleStopped}>Stopped</button>
							</div>
							<div className = "submit-container">
								<Button id = "edit-submit-button">Submit</Button>
							</div>
						</div>
					</Container>
				</div>
			</div>
		)
	}
}
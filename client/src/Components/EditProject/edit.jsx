import React from "react";
import './edit.css';
import {Container, Form, FormGroup, Input, Label, Button, Row, Col} from 'reactstrap';

export default class EditPage extends React.Component {

	render() {

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
							</Form>
							<p className = "form-labels">Project Status:</p>
							<div className = "button-container">
								<Button className = "custom-button solid" id = "new-button">New</Button>
								<Button className = "custom-button solid" id = "recruiting-button">Recruiting</Button>
								<Button className = "custom-button solid" id = "active-button">Active</Button>
								<Button className = "custom-button outline" id = "paused-button">Paused</Button>
								<Button className = "custom-button outline" id = "stopped-button">Stopped</Button>
								<Button className = "custom-button outline" id = "archived-button">Archived</Button>
								<Button className = "custom-button outline" id = "proposal-button">Proposal</Button>
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
import React from 'react';
import "./create.css" 
import {Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';

/*  Class:      CreatePage
    Purpose:    Renders our create project page and handles all of the functionality for the create project page
*/

export default class CreatePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sponsor: true
		}
	}

	/* Function:        handleSponsor
        Arguments:      event - html form event
        Return:         void
        Purpose:        sets state when "yes/no" radio buttons are clicked
    */

	handleSponsor = (event) => {
		if (event.target.value == "true") {
			this.setState({sponsor: true})
		} else if (event.target.value == "false"){
			this.setState({sponsor: false})
		}
	}

	//render page html
	render() {

		let legendClasses = 'col-form-label col-12';

		return (
			<div className = "create-outer-container">
				<div className = "create-form-container">
					<Container className = "themed-container shadow border border-med rounded">
						<div className = "title-container"> 
							<p className = "create-title">Submit an AI Project for Review</p>
						</div>
						<div className = "create-form">
							<Form>
								<FormGroup>
									<Label for = "title" className = "form-labels">Title</Label>
									<Input type = "title" name = "title" id = "title" placeholder = "My Project"/>
								</FormGroup>
								<FormGroup>
									<Label for = "description" className = "form-labels">Description</Label>
									<Input type = "textarea" name = "description" id = "description" placeholder = "Tell us what your project is all about."/>
								</FormGroup>
								<FormGroup tag = "fieldset">
									<Label for = "sponsor" className = "form-labels">Are you the sponsor of this project?</Label>
									<div className = "float-left">
										<FormGroup check>
											<Label check>
												<Input type = "radio" name = "radio1" value = "true" onClick = {this.handleSponsor}/>{' '}
													Yes
											</Label>
										</FormGroup>	
										<FormGroup check>
											<Label check>
												<Input type = "radio" name = "radio1" value = "false" onClick = {this.handleSponsor}/>{' '}
													No
											</Label>
										</FormGroup>
									</div>
								</FormGroup>

								{/*Render new field when user clicks 'No' radio button*/}

								{this.state.sponsor? <></> : 
									<FormGroup>
									<Label for = "projectSponsor" className = "form-labels">Who is your sponsor?</Label>
									<Input type = "sponsor" name = "sponsor" id = "projectSponsor" placeholder = "Sponsor's name"/>
									</FormGroup>
								}

								<FormGroup tag = "fieldset">
									<Label for = "sponsor" className = "form-labels">Are you recruiting team members?</Label>
									<div className = "float-left">
										<FormGroup check>
											<Label check>
												<Input type = "radio" name = "radio2" value = "true"/>{' '}
													Yes
											</Label>
										</FormGroup>	
										<FormGroup check>
											<Label check>
												<Input type = "radio" name = "radio2" value = "false"/>{' '}
													No
											</Label>
										</FormGroup>
									</div>
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
						</div>
						<div className = "submit-container">
							<Button id = "create-submit-button">Submit</Button>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}
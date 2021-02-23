import React from 'react';
import "./create.css" 
import {Container, Row, Col, Form, FormGroup, FormText, Label, Input} from 'reactstrap';

export default class EditPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sponsor: true
		}

	}

	handleSponsor = (event) => {
		//console.log(event.target.value);
		/*this.setState({sponsor: event.target.value});*/
		if (event.target.value == "true") {
			this.setState({sponsor: true})
		} else if (event.target.value == "false"){
			this.setState({sponsor: false})
		}
	}
	
	render() {
			const containerClasses = `themed-container shadow bg-white border border-med`;
			const labelClasses = 'float-left ml-1 font-weight-bold';
			const legendClasses = 'col-form-label col-12 font-weight-bold';

			return (
				<div id = "big-container">
					{/*Container with form*/}
					<Container className = {containerClasses} fluid = {true} id = "round-edges">
						{/*Green title bar*/}
						<Row xs = "1" sm = "2">
							<Col id = "rounded-green-bg">
								<h3>Fancy Form</h3>
							</Col>
							<Col></Col>
						</Row>
						{/*Form*/}
						<Row xs = "1" sm = "2">
							<Col className = "pl-4">
								<Form className = "pt-3">
									{/*Project title input*/}
									<FormGroup>
										<Label for = "projectTitle" className = {labelClasses}>Title</Label>
										<Input type = "title" name = "title" id = "projectTitle" placeholder = "My Project"/>
									</FormGroup>
									{/*Project description input*/}
									<FormGroup>
										<Label for = "projectDescription" className = {labelClasses}>Description</Label>
										<Input type = "textarea" name = "description" id = "projectDescription" placeholder = "Tell us what your project is all about."/>
									</FormGroup>
									{/*Sponsor input (Yes/No)*/}
									<Row xs = "12" className = "ml-1">
									<FormGroup tag = "fieldset" row className = "float-left">
										<legend className = {legendClasses}>Are you the sponsor of this project?</legend>
										<Col sm = {10}>
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
										</Col>
									</FormGroup>
									</Row>
									{/*If no sponsor, render textbox to ask for sponsor*/}
									{this.state.sponsor? <></> : 
										<FormGroup>
										<Label for = "projectSponsor" className = {labelClasses}>Who is your sponsor?</Label>
										<Input type = "sponsor" name = "sponsor" id = "projectSponsor" placeholder = "Sponsor's name"/>
										</FormGroup>
									}
									{/*Recruiting input (Yes/No)*/}
									<Row xs = "12" className = "ml-1">
									<FormGroup tag = "fieldset" row className = "float-left">
										<legend className = {legendClasses}>Are you recruiting team members?</legend>
										<Col sm = {10}>
											<div className = "float-left">
												<FormGroup check>
													<Label check>
														<Input type = "radio" name = "radio2"/>{' '}
														Yes	
													</Label>
												</FormGroup>
												<FormGroup check>
													<Label check>
														<Input type = "radio" name = "radio2"/>{' '}
														No
													</Label>
												</FormGroup>
											</div>
										</Col>
									</FormGroup>
									</Row>
									<FormGroup>
										<Label for = "projectImage" className = {labelClasses}>Upload an image:</Label>
										<Input type = "file" name = "file" id = "projectImage"/>
										<FormText color = "muted" className = "float-left pb-3">
											This image will be displayed with your project.
										</FormText>
									</FormGroup>
								</Form>
							</Col>
							{/*Column with content*/}
							<Col className = "pt-3 pr-4">
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
							</Col>
						</Row>
					</Container>
				</div>

		);
	}
}

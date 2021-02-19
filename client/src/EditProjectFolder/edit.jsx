import React from 'react';
import "./edit.css" 
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';

export default class EditPage extends React.Component {
	render() {
			const containerClasses = `themed-container shadow bg-white border border-med`;
			const labelClasses = 'float-md-left ml-1 font-weight-bold';
			const legendClasses = 'col-form-label col-12 font-weight-bold';

			return (
				<div id = "big-container">
					<Container className = {containerClasses} fluid = {true} id = "round-edges">
						<Row xs = "2">
							<Col id = "rounded-green-bg">
								<h3>Fancy Form</h3>
							</Col>
							<Col></Col>
						</Row>
						<Row xs = "2">
							<Col>
								<Form className = "pt-3">
									<FormGroup>
										<Label for = "projectTitle" className = {labelClasses}>Title</Label>
										<Input type = "title" name = "title" id = "projectTitle" placeholder = "My Project"/>
									</FormGroup>
									<FormGroup>
										<Label for = "projectDescription" className = {labelClasses}>Description</Label>
										<Input type = "textarea" name = "description" id = "projectDescription" placeholder = "Tell us what your project is all about."/>
									</FormGroup>
									<Row xs = "12" className = "ml-1">
									<FormGroup tag = "fieldset" row className = "float-md-left">
										<legend className = {legendClasses}>Are you the sponsor of this project?</legend>
										<Col sm = {10}>
											<div className = "float-md-left">
												<FormGroup check>
													<Label check>
														<Input type = "radio" name = "radio1"/>{' '}
														Yes
													</Label>
												</FormGroup>	
												<FormGroup check>
													<Label check>
														<Input type = "radio" name = "radio1"/>{' '}
														No
													</Label>
												</FormGroup>
											</div>
										</Col>
									</FormGroup>
									</Row>
									<Row xs = "12" className = "ml-1">
									<FormGroup tag = "fieldset" row className = "float-md-left">
										<legend className = {legendClasses}>Are you recruiting team members?</legend>
										<Col sm = {10}>
											<div className = "float-md-left">
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
								</Form>
							</Col>
							<Col>
								<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
							</Col>
						</Row>
					</Container>
				</div>
		);
	}
}

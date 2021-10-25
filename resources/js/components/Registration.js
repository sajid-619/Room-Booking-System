import { React, Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		password_confirmation: '',

		errorMessage: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	doRegister = async(e) => {
		e.preventDefault();

		await axios.post('/registration', this.state)
			.then((result) => {
				this.setState({
					name: '',
					email: '',
					password: '',
					password_confirmation: '',
					errorMessage: ''
				});

				$("#status").text(result.data).css('color', 'green');
			}).catch(error => {
				this.setState({errorMessage: error.response.data.errors});
			});
	}

	render() {
		if (localStorage.getItem('user')) {
			window.location.href='/';
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3 card">
						<div className="card-body">
							<h4 className="text-center">Create new account</h4>
							<hr />
							<p id="status"></p>
							<form onSubmit={this.doRegister}>
							  	<div className="form-group">
								    <label htmlFor="name">Name</label>
							    	<input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)} className="form-control" id="name" placeholder="Name" />
							    	
							    	{this.state.errorMessage['name'] && (
									  <p style={{color:'indianred'}}> {this.state.errorMessage['name']} </p>
									)}
							  	</div>

							  	<div className="form-group">
								    <label htmlFor="email">Email</label>
							    	<input type="email" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)} className="form-control" id="email" placeholder="Email" />
							  		
							  		{this.state.errorMessage['email'] && (
									  <p style={{color:'indianred'}}> {this.state.errorMessage['email']} </p>
									)}
							  	</div>

								<div className="form-group">
								    <label htmlFor="password">Password</label>
								    <input type="password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} className="form-control" id="password" placeholder="Password" />
									
									{this.state.errorMessage['password'] && (
									  <p style={{color:'indianred'}}> {this.state.errorMessage['password']} </p>
									)}
								</div>

								<div className="form-group">
								    <label htmlFor="cpassword">Confirm Password</label>
								    <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={(event) => this.handleChange(event)} className="form-control" id="cpassword" placeholder="Confirm Password" />
									
									{this.state.errorMessage['password_confirmation'] && (
									  <p style={{color:'indianred'}}> {this.state.errorMessage['password_confirmation']} </p>
									)}
								</div>
								
							    <button type="submit" className="btn btn-primary">Create account</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
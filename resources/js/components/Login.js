import { React, Component } from 'react';
import { withRouter, BrowserRouter, useHistory } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}


	doLogin = async(e) => {
		e.preventDefault();

		await axios.post('/login', this.state)
			.then((result) => {
				this.setState({
					email: '',
					password: '',
					errorMessage: ''
				});

				if (result.data.id) {
					localStorage.setItem('user', result.data.id);
					localStorage.setItem('userName', result.data.name);
					window.location.href='/';
				} else {
					$("#status").text(result.data).css('color', 'indianred');
				}
				
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
							<h4 className="text-center">Sign In</h4>
							<hr />
							<p id="status"></p>
							<form onSubmit={this.doLogin}>
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
								
							    <button type="submit" className="btn btn-primary">Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
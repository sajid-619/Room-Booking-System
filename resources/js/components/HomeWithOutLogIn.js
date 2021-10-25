import { React, Component } from 'react';

export default class HomeWithOutLogIn extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3 card">
						<div className="card-body">
							<h4 className="text-center">Welcome To React JS App!</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
import React from 'react';
import { Link } from 'react-router-dom';

const logout = () => {
	window.localStorage.clear();
    window.location.href = '/login';
}

const Menu = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 card bg-primary">
					<nav className="navbar navbar-expand-lg navbar-light">
					  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav mr-auto">
						      	{(() => {
							        if (localStorage.getItem('user')) {
							          return (
							            <div style={{display:'inherit'}}>
								            <li className="nav-item">
									        	<Link className="nav-link" to="/">Home</Link>
									      	</li>
							            	<li className="nav-item">
					            		   		<a className="nav-link" href="#" onClick={logout}>Logout</a>
									      	</li>
							            </div>
							          )
							        } else {
							          return (
							            <div style={{display:'inherit'}}>
							            	<li className="nav-item">
									        	<Link className="nav-link" to="/">Home</Link>
									      	</li>
								            <li className="nav-item">
									        	<Link className="nav-link" to="/registration">Registration</Link>
									      	</li>
									      	<li className="nav-item">
									        	<Link className="nav-link" to="/login">Login</Link>
									      	</li>
							            </div>
							          )
							        }
							    })()}
						    </ul>
					  	</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Menu;
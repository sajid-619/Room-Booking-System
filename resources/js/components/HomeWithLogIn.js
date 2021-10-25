import { React, Component } from 'react';
import axios from 'axios';

export default class HomeWithLogIn extends Component {
	state = {
		room_number: '',
		room_name: '',
		room_type: '',
		room_qty: '',
		start_date: '',
		end_date: '',
		errorMessage: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}


	doSave = async(e) => {
		e.preventDefault();

		await axios.post('/save', this.state)
			.then((result) => {
				this.setState({
					room_number: '',
					room_name: '',
					room_type: '',
					room_qty: '',
					start_date: '',
					end_date: '',
					errorMessage: ''
				});
				console.log(result.data);

				$("#status").text(result.data).css('color', 'green');
				
			}).catch(error => {
				this.setState({errorMessage: error.response.data.errors});
			});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3 card">
						<div className="card-body">
							<p className="text-right">Welcome {localStorage.getItem('userName')}</p>
							<hr />
							<p id="status"></p>

							<form onSubmit={this.doSave}>
							  	<div className="row form-group">
							  		<div className="col-md-4">
								    	<label htmlFor="no">Room No.</label>
							    		<input type="number" name="room_number" value={this.state.room_number} onChange={(event) => this.handleChange(event)} className="form-control" id="no"/>
							    		
							    		{this.state.errorMessage['room_number'] && (
										  <p style={{color:'indianred'}}> {this.state.errorMessage['room_number']} </p>
										)}
							  		</div>
							  		<div className="col-md-4">
								    	<label htmlFor="room_name">Room Name</label>
							    		<input type="text" name="room_name" value={this.state.room_name} onChange={(event) => this.handleChange(event)} className="form-control" id="room_name"/>
							  			
							  			{this.state.errorMessage['room_name'] && (
										  <p style={{color:'indianred'}}> {this.state.errorMessage['room_name']} </p>
										)}
							  		</div>
							  		<div className="col-md-4">
								    	<label htmlFor="room_type">Room Type</label>
							    		<select id="room_type" className="form-control" name="room_type" value={this.state.room_type} onChange={(event) => this.handleChange(event)} >
								            <option value="">Select</option>
								            <option value="Economy">Economy</option>
								            <option value="Executive">Executive</option>
								            <option value="VIP">VIP</option>
							          	</select>

							          	{this.state.errorMessage['room_type'] && (
										  <p style={{color:'indianred'}}> {this.state.errorMessage['room_type']} </p>
										)}
							  		</div>
						  		</div>

						  		<div className="row form-group">
						  			<div className="col-md-4">
								    	<label htmlFor="room_qty">Room Qty.</label>
							    		<select id="room_qty" className="form-control" name="room_qty" value={this.state.room_qty} onChange={(event) => this.handleChange(event)} >
								            <option value="">Select Qty</option>
								            <option value="1">1</option>
								            <option value="2">2</option>
								            <option value="3">3</option>
								            <option value="4">4</option>
							          	</select>
							  			
							  			{this.state.errorMessage['room_qty'] && (
										  <p style={{color:'indianred'}}> {this.state.errorMessage['room_qty']} </p>
										)}
							  		</div>
							  		<div className="col-md-4">
								    	<label htmlFor="start_date">Start Date</label>
							    		<input type="date" name="start_date" value={this.state.start_date} onChange={(event) => this.handleChange(event)} className="form-control" id="start_date" />
							  			
							  			{this.state.errorMessage['start_date'] && (
										  <p style={{color:'indianred'}}> {this.state.errorMessage['start_date']} </p>
										)}
							  		</div>
							  		<div className="col-md-4">
								    	<label htmlFor="end_date">End Date</label>
							    		<input type="date" name="end_date" value={this.state.end_date} onChange={(event) => this.handleChange(event)} className="form-control" id="end_date" />
							  			
							  			{this.state.errorMessage['end_date'] && (
										  <p style={{color:'indianred'}}> {this.state.errorMessage['end_date']} </p>
										)}
							  		</div>
						  		</div>

							    <button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
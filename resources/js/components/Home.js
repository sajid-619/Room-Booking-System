import { React, Component } from 'react';
import HomeWithLogIn from './HomeWithLogIn';
import HomeWithOutLogIn from './HomeWithOutLogIn';

export default class Home extends Component {
	render() {
		if (localStorage.getItem('user')) {
			return (
				<HomeWithLogIn />
			)
		} else {
			return (
				<HomeWithOutLogIn />
			)
		}
	}
}
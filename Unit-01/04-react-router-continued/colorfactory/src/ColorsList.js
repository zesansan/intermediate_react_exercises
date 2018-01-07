import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

class ColorsList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const header = (
			<div className="Header">
				<h1 className="Title">Welcome to Colors</h1>
				<Link to="/colors" className="Header-link">
					see all colors
				</Link>
				<br />
				<Link to="/colors/new" className="Header-link">
					add new color
				</Link>
			</div>
		);
		return <div>{header}</div>;
	}
}

export default ColorsList;

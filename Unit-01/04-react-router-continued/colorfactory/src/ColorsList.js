import React from "react";
import { Link } from "react-router-dom";
import "./ColorsList.css";

const ColorsList = props => {
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
	const colorLinks = props.colors.map(color => (
		<li>
			<Link to={`/colors/${color.colorName}`}>{color.colorName}</Link>
		</li>
	));
	return (
		<div>
			<header>{header}</header>
			<ul>{colorLinks}</ul>
		</div>
	);
};

export default ColorsList;

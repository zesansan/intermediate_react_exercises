import React, { Component } from "react";
import "./ColorForm.css";

class ColorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorName: "",
			hex: "#FFFFFF"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addColor(this.state);
		this.props.history.push("/colors");
	}
	render() {
		return (
			<div className="wrapper">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChange}
						name="colorName"
						placeholder="name your color"
						value={this.state.colorName}
					/>
					<br />
					<label>Select Color:</label>
					<input
						type="color"
						onChange={this.handleChange}
						name="hex"
						value={this.state.hex}
					/>
					<br />
					<input type="submit" value="add" />
				</form>
			</div>
		);
	}
}
export default ColorForm;

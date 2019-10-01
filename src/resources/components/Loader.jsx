import React, { Component } from "react";
import "../styles/loader.css";

export default class Loader extends Component {
	render() {
		return (
			<div className="loader-container">
				<div className="loader">
					<div className="loader--dot" />
					<div className="loader--dot" />
					<div className="loader--dot" />
					<div className="loader--dot" />
					<div className="loader--dot" />
					<div className="loader--dot" />
					<div className="loader--text" />
				</div>
			</div>
		);
	}
}

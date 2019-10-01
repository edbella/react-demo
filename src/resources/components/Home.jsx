import React, { Component } from "react";
import Helmet from "react-helmet";
import WPHome from "./WPHome";
import WPAbout from "./WPAbout";
import WPSolutions from "./WPSolutions";
import WPAppend from "./WPAppend";
import AppendNews from "./AppendNews";
/* import BlogView from "./BlogView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; */

export default class Home extends Component {
	render() {
		return (
			<div>
				<Helmet titleTemplate="%s - ClearIT" defaultTitle="ClearIT">
					<title>Home</title>
				</Helmet>

				<WPHome />
				<WPSolutions />
				<WPAbout />
				<WPAppend />
				<AppendNews />
			</div>
		);
	}
}

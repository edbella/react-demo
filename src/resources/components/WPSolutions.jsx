import React, { Component } from "react";
import axios from "axios";
import bgImage from "../images/bg-1.png";
const API_URL = "http://localhost:8888/clearit-wp/wp-json/wp/v2/pages/24?_embed";

class WPSolutions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			details: [],
			content: []
		};
	}

	componentDidMount() {
		axios
			.get(API_URL)

			.then(response => {
				this.setState({
					details: response.data,
					id: response.data.id,
					content: response.data.content.rendered,
					image: response.data._embedded["wp:featuredmedia"]["0"].source_url,
					title: response.data.title.rendered,
					isLoaded: true
				});
			})

			.catch(error => this.setState({ error: error.message, isLoaded: false }));
	}

	render() {
		const { title, content, image } = this.state;

		return (
			<React.Fragment>
				<section
					id="solutions"
					className="section-padding container-fluid colored-bg fixed-floater"
					style={{ backgroundImage: `url(${bgImage})` }}
				>
					<div className="container">
						<h1 className="section-title center" data-aos="fade-up">
							{title}
						</h1>

						<div dangerouslySetInnerHTML={{ __html: content }} />

						<figure
							className="text-center col-md-10 mx-auto"
							data-aos="fade-up"
						>
							<img
								className="img-fluid"
								src={image}
								alt="Importer/Exporter Features"
							/>
						</figure>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default WPSolutions;

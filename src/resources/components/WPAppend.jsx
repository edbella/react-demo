import React, { Component } from "react";
import axios from "axios";
import bgImage from "../images/bg-accent.png";
const API_URL = "http://localhost:8888/clearit-wp/wp-json/wp/v2/pages/26?_embed";

class WPAppend extends Component {
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
		const { isLoaded, title, content, image } = this.state;

		return (
			<React.Fragment>
				{isLoaded ? (
					<section
						className="section-padding container-fluid colored-bg"
						style={{ backgroundImage: `url(${bgImage})` }}
					>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 order-lg-1" data-aos="fade-left">
									<figure className="floating-image">
										<img className="img-fluid" src={image} alt={title} />
									</figure>
								</div>

								<div className="col-lg-6" data-aos="fade-right">
									<h1 className="section-title" data-aos="fade-up">
										{title}
									</h1>

									<article
										dangerouslySetInnerHTML={{ __html: content }}
									></article>
								</div>
							</div>
						</div>
					</section>
				) : (
					<p className="text-center m-3">...</p>
				)}
			</React.Fragment>
		);
	}
}

export default WPAppend;

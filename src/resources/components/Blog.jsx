import React, { Component } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:8888/clearit-wp/wp-json/wp/v2/posts?_embed";

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			posts: []
		};
	}

	CancelToken = axios.CancelToken;
	source = this.CancelToken.source();

	abortController = new AbortController();

	componentDidMount() {
		axios
			.get(API_URL, {
				cancelToken: this.source.token
			})

			.then(response => {
				this.setState({
					posts: response.data,
					isLoaded: true
				});
			})

			.catch(error => this.setState({ error: error.message, isLoaded: false }));
	}

	componentWillUnmount() {
		this.source.cancel("Operation canceled by the user.");
	}

	render() {
		const { isLoaded, posts } = this.state;

		return (
			<React.Fragment>
				<Helmet titleTemplate="%s - ClearIT" defaultTitle="ClearIT">
					<title>Blog</title>
				</Helmet>

				<section className="normal-banner dark">
					<div className="base">
						<div className="container">
							<div className="row h-100 align-items-center">
								<div className="col-lg-8 col-md-10 mx-auto hero">
									<h1 className="section-title">All News</h1>
								</div>
							</div>
						</div>
					</div>
				</section>

				{isLoaded ? (
					<section id="blog" className="section-padding container-fluid">
						<div className="container">
							<div className="row">
								{posts.map(post => {
									return (
										<div
											key={post.id}
											className="col-md-4 news-post"
											data-aos="fade-up"
										>
											<figure>
												<h3 className="title">{post.title.rendered}</h3>

												<img
													className="img-fluid"
													src={post.images.large}
													alt={post.title.rendered}
												/>
											</figure>

											<h3 className="category">
												{post._embedded["wp:term"]["0"]["0"].name}
											</h3>

											<article
												className="excerpt"
												dangerouslySetInnerHTML={{
													__html: post.excerpt.rendered
												}}
											/>
											<Link
												className="stretched-link"
												to={`/blog/${post.slug}`}
											>
												Read More
											</Link>
										</div>
									);
								})}
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

export default Blog;

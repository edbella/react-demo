import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:8888/clearit-wp/wp-json/wp/v2/posts?per_page=3&_embed";

class AppendNews extends Component {
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
			/*.then(response => response.data.map(detail => ({
        image: `${detail._embedded['wp:featuredmedia']['0'].source_url}`,
        content: `${detail.content.rendered}`,
        id: `${detail.id}`
      }))
    )*/

			.then(response => {
				this.setState({
					posts: response.data,
					/*id: response.data.id,
          title: response.data.title.rendered,
					excerpt: response.data.excerpt.rendered,
          image: response.data._embedded["wp:featuredmedia"]["0"].source_url,
          category: response.data._embedded["wp:term"]["0"]['0'].name,*/
					isLoaded: true
				});
			})

			/*.then(details => {
        this.setState({
          details,
          isLoading: false
        });
      })*/
			.catch(error => this.setState({ error: error.message, isLoaded: false }));
	}

	componentWillUnmount() {
		this.source.cancel("Operation canceled by the user.");
	}

	render() {
		//const { isLoading, details, content } = this.state;
		const { isLoaded, posts } = this.state;

		return (
			<section id="blog" className="section-padding container-fluid">
				<div className="container">
					<h1 className="section-title center" data-aos="fade-up">
						News
					</h1>

					<div className="row">
						{isLoaded ? (
							posts.map(post => {
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
												src={post._embedded["wp:featuredmedia"]["0"].source_url}
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
										<Link className="stretched-link" to={`/blog/${post.slug}`}>
											Read More
										</Link>
									</div>
								);
							})
						) : (
							<p className="text-center">Please wait...</p>
						)}
					</div>

					<div className="text-center">
						<Link
							to="/blog"
							className="brand-btn dark norm my-2 my-sm-0 waves-effect waves-dark"
						>
							View More
						</Link>
					</div>
				</div>
			</section>
		);
	}
}

export default AppendNews;

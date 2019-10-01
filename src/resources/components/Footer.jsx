import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

class Footer extends Component {
	state = {};

	render() {
		let CurrentYear = new Date().getFullYear();

		return (
			<React.Fragment>
				<footer className="section-padding">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-lg-3 col-md-4">
								<article className="ft-widget">
									<h3 className="ft-widget-title">About</h3>

									<ul>
										<li>
											We are a company providing smart solutions for efficient,
											transparent, and cost effective operations within the
											maritime space.
										</li>
									</ul>
								</article>
							</div>

							<div className="col-lg-3 col-md-4">
								<article className="ft-widget">
									<h3 className="ft-widget-title">Contact</h3>

									<ul>
										<li>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam nonumy eirmod tempor invidunt ut labore et
											dolore.
										</li>
									</ul>
								</article>
							</div>

							<div className="col-lg-3 col-md-4">
								<article className="ft-widget">
									<h3 className="ft-widget-title">Company</h3>

									<ul>
										<li>
											<AnchorLink className="smooth-scroll" href="#about-us">
												About Us
											</AnchorLink>
										</li>

										<li>
											<AnchorLink className="smooth-scroll" href="#solutions">
												Solutions
											</AnchorLink>
										</li>

										<li>
											<Link className="smooth-scroll" to="/blog">
												Blog
											</Link>
										</li>
									</ul>
								</article>
							</div>
						</div>
					</div>

					<div className="foot-note">
						<div className="container">
							<div className="row justify-content-between">
								<div className="col-md-5">
									&copy; {CurrentYear} ClearIT. All Rights Reserved.
								</div>

								<div className="col-md-5">
									<ul className="social-widget">
										<li>
											<a href="https://facebook.com">
												<i className="fa fa-facebook"></i>
											</a>
										</li>

										<li>
											<a href="https://instagram.com">
												<i className="fa fa-instagram"></i>
											</a>
										</li>

										<li>
											<a href="https://twitter.com">
												<i className="fa fa-twitter"></i>
											</a>
										</li>

										<li>
											<a href="https://linkedin.com">
												<i className="fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>

				{/* // <! Back to top-- > */}
				<button className="back-to-top" type="button"></button>
			</React.Fragment>
		);
	}
}

export default Footer;

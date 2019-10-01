import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../images/logo.png';

export default class Header extends Component {
  render() {
    return (
        <div>

          <progress value="0"></progress>

          <header id="menu" className="">

            <nav className="navbar navbar-expand-xl">

              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#view"
                aria-controls="view" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span>
              </button>

              <Link className="navbar-brand mx-auto" to="/" data-aos="fade" data-aos-mirror="false">
                <img className="logo img-fluid" src={Logo} alt="" />
              </Link>

              <div id="view" className=" collapse navbar-collapse" data-aos="zoom-in" data-aos-mirror="false">
                <div className="navbar-nav mx-auto">

                  <li className="nav-item">
                    <AnchorLink className="nav-link smooth-scroll" href="#about-us">About us</AnchorLink>
                  </li>

                  <li className="nav-item">
                    <AnchorLink className="nav-link smooth-scroll" href="#solutions">Solutions</AnchorLink>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link smooth-scroll" to="/blog">Blog</Link>
                  </li>

                </div>


                <div className="navbar-nav">

                  {/*<li className="nav-item dropdown">
                    <Link className="nav-link" to="/">Sign in</Link>
                  </li>*/}

                </div>

                <form className="form-inline">
                  <Link className="brand-btn dark norm my-2 my-sm-0 waves-effect waves-dark" to="//google.com">get started</Link>
                </form>

              </div>



            </nav>
          </header>
          </div>
    )
  }
}
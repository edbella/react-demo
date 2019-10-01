import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Blog from "./Blog";
import BlogView from "./BlogView";
import AOS from "aos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Layout extends Component {
 componentDidMount() {
  AOS.init({
   duration: 1200,
   delay: 10,
   mirror: false
  });
 }

 render() {
  return (
   <Router>
    <Header />
    <Switch>
     <Route path="/" exact component={Home} />
     <Route exact path="/blog/" component={Blog} />
     <Route path="/blog/:slug" component={BlogView} />
    </Switch>
    <Footer />
   </Router>
  );
 }
}

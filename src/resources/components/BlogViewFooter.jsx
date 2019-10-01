import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL =
 "http://localhost:8888/clearit-wp/wp-json/wp/v2/posts?orderby=rand&per_page=1";

class BlogViewFooter extends Component {
 constructor(props) {
  super(props);
  this.state = {
   error: null,
   isLoaded: false,
   post: []
  };
  this.getPrevious = this.getPrevious.bind(this);
  this.getNext = this.getNext.bind(this);
 }

 getPrevious = () => {
  axios
   .get(API_URL)

   .then(response => {
    this.setState({
     post: response.data[0],
     title: response.data[0].title.rendered,
     slug: response.data[0].slug,
     isLoaded: true
    });
   })

   .catch(error => this.setState({ error: error.message, isLoaded: false }));
 };

 getNext = () => {
  axios
   .get(API_URL)

   .then(response => {
    this.setState({
     post_2: response.data[0],
     title_2: response.data[0].title.rendered,
     slug_2: response.data[0].slug,
     isLoaded_2: true
    });
   })

   .catch(error => this.setState({ error: error.message, isLoaded: false }));
 };

 componentDidMount() {
  this.getPrevious();
  this.getNext();
 }

 render() {
  const { isLoaded, title, slug, title_2, slug_2 } = this.state;

  return (
   <React.Fragment>
    {isLoaded ? (
     <article className="article-footer" data-aos="fade">
      {/* <!-- Previous Article --> */}
      <div className="previous-article">
       {/* <!-- Previous Article Link --> */}
       <Link className="stretched-link" to={`/blog/${slug}`}>
        <i className="fa fa-arrow-left"></i> Previous
       </Link>
       {/* <!-- / Previous Article Link --> */}

       {/* <!-- Previous Article Title --> */}
       <h3>{title}</h3>
       {/* <!-- / Previous Article Title --> */}
      </div>
      {/* <!-- / Previous Article --> */}

      {/* <!-- Next Article --> */}
      <div className="next-article">
       {/* <!-- Next Article Link --> */}
       <Link className="stretched-link" to={`/blog/${slug_2}`}>
        Next <i className="fa fa-arrow-right"></i>
       </Link>
       {/* <!-- / Next Article Link --> */}

       {/* <!-- Next Article Title --> */}
       <h3>{title_2}</h3>
       {/* <!-- / Next Article Title --> */}
      </div>
      {/* <!-- / Next Article --> */}
     </article>
    ) : (
     <p className="text-center m-3">...</p>
    )}
   </React.Fragment>
  );
 }
}

export default BlogViewFooter;

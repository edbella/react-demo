import React, { Component } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import { Switch } from "react-router-dom";
import Moment from "react-moment";
import Loader from "./Loader";
import BlogViewFooter from "./BlogViewFooter";
const API_URL =
 "http://localhost:8888/clearit-wp/wp-json/wp/v2/posts?_embed&slug=";

class BlogView extends Component {
 constructor(props) {
  super(props);
  this.state = {
   error: null,
   isLoaded: false,
   post: []
  };
 }

 componentDidMount() {
  const slug = this.props.match.params.slug;
  console.log(slug);
  axios
   .get(`${API_URL}${slug}`)

   .then(response => {
    this.setState({
     post: response.data[0],
     id: response.data[0].id,
     content: response.data[0].content.rendered,
     title: response.data[0].title.rendered,
     image: response.data[0].images.large,
     date: response.data[0].date,
     isLoaded: true
    });
   })

   .catch(error => this.setState({ error: error.message, isLoaded: false }));
 }

 render() {
  const { isLoaded, id, image, content, title, date } = this.state;
  const dateToFormat = date;

  return (
   <React.Fragment>
    <Helmet titleTemplate="%s - ClearIT" defaultTitle="ClearIT">
     <title>{title}</title>
    </Helmet>

    {isLoaded ? (
     <React.Fragment>
      <section className="normal-banner dark">
       <div className="base">
        <div className="container">
         <div className="row h-100 align-items-center">
          <div className="col-lg-8 col-md-10 mx-auto hero" />
         </div>
        </div>
       </div>
      </section>

      <section id={id} className="section-padding news-feed news-inner">
       <div className="container">
        <div className="col-md-10 mx-auto">
         {/* Image Thumbnail */}
         <figure className="hero-thumbnail" data-aos="zoom-in-down">
          <img className="img-fluid" src={image} alt="" />
         </figure>
         {/* Image Thumbnail */}

         {/* <!-- Article Header --> */}
         <header className="article-header" data-aos="fade-up">
          {/* <!-- Article Title --> */}
          <h1 className="title">{title}</h1>
          {/* <!-- / Article Title --> */}

          {/* <!-- Date --> */}
          <p className="date">
           <Moment format="MMMM Do, YYYY" fromNow ago>
            {dateToFormat}
           </Moment>
          </p>
          {/* <!-- / Date --> */}
         </header>
         {/* <!-- / Article Header --> */}

         {/* Article Content */}
         <article
          className="article-content"
          data-aos="fade"
          dangerouslySetInnerHTML={{ __html: content }}
         ></article>
         {/* Article Content  */}
         <Switch>
          <BlogViewFooter />
         </Switch>
        </div>
       </div>
      </section>
     </React.Fragment>
    ) : (
     <Loader />
    )}
   </React.Fragment>
  );
 }
}

export default BlogView;

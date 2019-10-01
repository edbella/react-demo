import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';
//const API_URL = 'http://localhost:8888/clearit-wp/wp-json/wp/v2/pages?_embed&filter[orderby]=date&order=asc';
const API_URL = 'http://localhost:8888/clearit-wp/wp-json/wp/v2/pages/2?_embed';

class WPHome extends Component {

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
      /*.then(response => response.data.map(detail => ({
        image: `${detail._embedded['wp:featuredmedia']['0'].source_url}`,
        content: `${detail.content.rendered}`,
        id: `${detail.id}`
      }))
    )*/
      
      .then(response => {
        this.setState({
          details: response.data,
          id: response.data.id,
          content: response.data.content.rendered,
          image: response.data._embedded['wp:featuredmedia']['0'].source_url,
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

  render() {
    //const { isLoading, details, content } = this.state;
    const { isLoaded, content, image } = this.state;

    return (
      /*<React.Fragment>
        {!isLoading ? (
          details.map(detail => {
            const { id, content, image } = detail;
            return (
              <div key={id}>
                <section className="banner" style={{ backgroundImage: `url(${image})` }}>

                  <div className="base container">

                    <div className="col-lg-7 col-md-10">

                      <article className="hero" data-aos="zoom-out">
                        <h1 className="title">{content}</h1>

                        <form className="tracking-form">
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="tracking id" aria-label="track-code"
                              aria-describedby="button-addon2" />
                            <div className="input-group-append">
                              <button className="brand-btn waves-effect waves-dark" type="submit">Track</button>
                            </div>
                          </div>

                        </form>


                      </article>

                    </div>

                  </div>

                </section>
              </div>
            );
          })
        ) : (
            <p>Loading</p>
          )
        }
      </React.Fragment>*/

      <React.Fragment>
        {isLoaded ? (
          <section className="banner" style={{ backgroundImage: `url(${image})` }}>

            <div className="base container">

              <div className="col-lg-7 col-md-10">

                <article className="hero" data-aos="zoom-out" data-aos-delay="300">
                  <h1 className="title" dangerouslySetInnerHTML={{ __html: content }}></h1>

                  <form className="tracking-form">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="tracking id" aria-label="track-code"
                        aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button onClick={this.loadResults} className="brand-btn waves-effect waves-dark" type="submit">Track</button>
                      </div>
                    </div>

                  </form>


                </article>

              </div>

            </div>

          </section>

          
        ) : (

            <Loader></Loader>
            
        )
        }
      </React.Fragment>
      
    )
  }
}

export default WPHome;
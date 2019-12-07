import React from 'react';
import fetch from '../lib/fetchProductData.js';
import Ratings from './ratings.jsx';
import HelpfulReviews from './helpfulreviews.jsx';
import ReviewList from './reviewlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingsSnapshot: [251, 46, 9, 9, 16],
      ratingsAverages: {
        overall: 4.5,
        value: 4.3,
        quality: 4.6,
        features: 4.6
      },
      goodReview: {},
      badReview: {},
      reviews: [{}],
      filters: {
        stars: [],
        locale: 'English'
      }
      //sortBy: '' //Recent actually this goes down lower
    };
    this.writeReviewHandler = this.writeReviewHandler.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  //this sets up the initial state of the component with live data
  componentDidMount() {
    //fetch data
    // fetch(0)
    //   .then((blob) => this.setState(blob));
  }

  //this purposefully does nothing because this is a feature far beyond our curent scope
  writeReviewHandler(event) {
    event.disableDefaults();
  }

  //this is for updating the filter state via other components
  updateFilter(update) {
    let filters = _.extend(this.state.filters, update);
    this.setState({ filters });
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5%', marginTop: '5%'}}>
        <div>
          <h1>Ratings &amp; Reviews</h1>
          <hr />
          <button style={{float: 'right', backgroundColor: 'blue', color: 'white'}} onClick={(event) => writeReviewHandler(event)}>Write a Review</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Ratings ratingsSnapshot={this.state.ratingsSnapshot} ratingsAverages={this.state.ratingsAverages}/>
          <HelpfulReviews goodReview={this.state.goodReview} badReview={this.state.badReview} updateFilter={this.updateFilter}/>
          <ReviewList reviews={this.state.reviews} filters={this.state.filters} updateFilter={this.updateFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
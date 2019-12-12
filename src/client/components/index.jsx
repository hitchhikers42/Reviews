import React from 'react';
import fetch from '../lib/fetchProductData.js';
import Ratings from './ratings/index.jsx';
import HelpfulReviews from './helpfulreviews/index.jsx';
import ReviewList from './reviewlist/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingsSnapshot: [],
      ratingsAverages: {
        overall: 0,
        value: 0,
        quality: 0,
        features: 0
      },
      goodReview: {
        rating: {
        },
        user: {
        },
        createdAt: null,
        title: '',
        text: '',
        nFoundHelpful: 0,
        nHelpfulRatings: 0,
        recommended: null
      },
      badReview: {
        rating: {
        },
        user: {
        },
        createdAt: null,
        title: '',
        text: '',
        nFoundHelpful: 0,
        nHelpfulRatings: 0,
        recommended: null
      },
      reviews: [{
        rating: {
        },
        user: {
        },
        createdAt: null,
        title: '',
        text: '',
        nFoundHelpful: 0,
        nHelpfulRatings: 0,
        recommended: null
      }],
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
    fetch(0)
      .then(({data}) => this.setState(data));
  }

  //this purposefully does nothing because this is a feature far beyond our curent scope
  writeReviewHandler(event) {
    event.disableDefaults();
  }

  //this is for updating the filter state via other components
  updateFilter(update) {
    //let filters = _.extend(this.state.filters, update);
    //this.setState({ filters });
    console.log('filter woudl be updated... IF WE HAD ONE!');
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10%', marginRight: '10%', marginBottom: '5%', marginTop: '5%'}}>
        <div>
          <h1>Ratings &amp; Reviews</h1>
          <hr />
          <button style={{float: 'right', backgroundColor: 'blue', color: 'white'}} onClick={(event) => writeReviewHandler(event)}>Write a Review</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Ratings ratingsSnapshot={this.state.ratingsSnapshot}
            ratingsAverages={this.state.ratingsAverages}/>
          <HelpfulReviews goodReview={this.state.goodReview}
            badReview={this.state.badReview}
            updateFilter={this.updateFilter}/>
          <ReviewList reviews={this.state.reviews}
            filters={this.state.filters}
            updateFilter={this.updateFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
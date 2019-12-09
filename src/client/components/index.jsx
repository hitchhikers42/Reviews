import React from 'react';
import fetch from '../lib/fetchProductData.js';
import Ratings from './ratings/index.jsx';
import HelpfulReviews from './helpfulreviews/index.jsx';
import ReviewList from './reviewlist/index.jsx';

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
      goodReview: {
        stars: 4,
        user: {
          name: 'Bob Goodrating'
        },
        createdAt: (new Date()).toString(),
        title: 'Good Rating Review',
        text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
        nFoundHelpful: 200,
        nHelpfulRatings: 237
      },
      badReview: {
        stars: 2,
        user: {
          name: 'Bill Badrating'
        },
        createdAt: (new Date()).toString(),
        title: 'Bad Rating Review',
        text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
        nFoundHelpful: 194,
        nHelpfulRatings: 248},
      reviews: [{}, {}, {}],
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
    //let filters = _.extend(this.state.filters, update);
    //this.setState({ filters });
    console.log('filter woudl be updated... IF WE HAD ONE!');
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
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
        rating: {
          stars: 4
        },
        user: {
          name: 'Bob Goodrating',
          location: 'The Database',
          nReviews: 1,
          nVotes: 0
        },
        createdAt: (new Date()).toString(),
        title: 'Good Rating Review',
        text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
        nFoundHelpful: 200,
        nHelpfulRatings: 237,
        recommended: true
      },
      badReview: {
        rating: {
          stars: 2
        },
        user: {
          name: 'Bill Badrating',
          location: 'The Database',
          nReviews: 1,
          nVotes: 0
        },
        createdAt: (new Date()).toString(),
        title: 'Bad Rating Review',
        text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
        nFoundHelpful: 194,
        nHelpfulRatings: 248,
        recommended: false
      },
      reviews: [{
        rating: {
          stars: 3,
          value: 4,
          quality: 1,
        },
        user: {
          name: 'Player 1',
          location: 'The Database',
          nReviews: 1,
          nVotes: 0
        },
        createdAt: (new Date()).toString(),
        title: 'Review Player 1',
        text: 'Reviews seem to be one paragraph only. WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS WORDS AND WORDS AND WORDS AND WORDS AND WORDS',
        nFoundHelpful: -1,
        nHelpfulRatings: 0,
        recommended: true
      },
      {
        rating: {
          stars: 4,
        },
        user: {
          name: 'Player 2',
          location: 'The Database',
          nReviews: 2,
          nVotes: 2
        },
        createdAt: (new Date()).toString(),
        title: 'Player 2\'s Review',
        text: 'Reviews can be one sentence!',
        nFoundHelpful: 2,
        nHelpfulRatings: 4,
        recommended: false
      },
      {
        rating: {
          stars: 5,
          value: 5,
          quality: 5,
          features: 5
        },
        user: {
          name: 'Nobody',
          location: 'Nowhere',
          nReviews: 3,
          nVotes: 6
        },
        createdAt: (new Date()).toString(),
        title: 'Multiparagraph Review',
        text: 'Reviews seem to be one paragraph only.' + '\n' +
        'This one should be two paragraphs though!' + '\n' +
        'In fact it is three paragraphs. Or it should be....',
        nFoundHelpful: 3,
        nHelpfulRatings: 6,
        recommended: true
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
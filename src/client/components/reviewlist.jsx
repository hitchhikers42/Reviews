import React from 'react';
import Header from './reviewlistheader.jsx';
import Review from './reviewlistreview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewableReviews: props.reviews
    };
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header updateFilter={this.props.updateFilter} start={1} end={8} nReviews={332}/>
        {this.state.viewableReviews.map((review, i) => <Review review={review} key={i}/>)}
      </div>
    );
  }
}

export default ReviewList;
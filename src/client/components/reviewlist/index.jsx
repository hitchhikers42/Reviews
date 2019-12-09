import React from 'react';
import Header from './header.jsx';
import Review from './review.jsx';
import Footer from './footer.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewableReviews: props.reviews.slice(0, 8),
      start: 1,
      end: 8,
      sorting: 'Most Recent'
    };
    this.updateViewableReviews = this.updateViewableReviews.bind(this);
  }

  updateViewableReviews(start, end) {
    this.setState(
      {viewableReviews: props.reviews.slice(start - 1, end), start, end}
    );
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header start={this.state.start}
          end={this.state.end}
          nReviews={332}
          updateFilter={this.props.updateFilter} />
        {this.state.viewableReviews.map((review, i) => (
          <div key={i}>
            <hr />
            <Review review={review}/>
          </div>
        ))}
        <Footer start={this.state.start}
          end={this.state.end}
          nReviews={332}
          updateViewable={this.updateViewableReviews}/>
      </div>
    );
  }
}

export default ReviewList;
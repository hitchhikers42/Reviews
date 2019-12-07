import React from 'react';

class ReviewListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'Most Recent'
    };
  }
  render() {
    return (
      <div style={{backgroundColor: 'gray'}}>
        <b style={{float: 'left'}}>{this.props.start}-{this.props.end} of {this.props.nReviews} Reviews</b>
        <button style={{float: 'right'}}>{'hides/unhides additional sorting options'}</button>
        <b style={{float: 'right'}}>Sort by selector: {this.state.sortedBy}</b>
      </div>
    );
  }
}

export default ReviewListHeader;
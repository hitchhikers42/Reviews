import React from 'react';
import Optional from './optional.jsx';


class ReviewListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'Most Recent',
      optional: false
    };
    this.toggleOptional = this.toggleOptional.bind(this);
  }

  toggleOptional() {
    this.setState({optional: !this.state.optional});
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor: 'lightgray', boxSizing: 'border-box', height: '2em', alignText: 'center'}}>
          <b style={{float: 'left'}}>{this.props.start}-{this.props.end} of {this.props.nReviews} Reviews</b>
          <button style={{float: 'right'}} onClick={this.toggleOptional}>{'hides/unhides additional sorting options'}</button>
          <b style={{float: 'right'}}>Sort by selector: {this.state.sortedBy}</b>
        </div>
        <Optional visible={this.state.optional} />
      </div>
    );
  }
}

export default ReviewListHeader;
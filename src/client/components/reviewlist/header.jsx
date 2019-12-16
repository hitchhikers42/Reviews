import React from 'react';
import Optional from './optional.jsx';


class ReviewListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: 'Recent',
      optional: false
    };
    this.toggleOptional = this.toggleOptional.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
  }

  toggleOptional() {
    this.setState({optional: !this.state.optional});
  }

  handleSorting(event) {
    this.setState({sorting: event.target.value});
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor: 'lightgray', boxSizing: 'border-box', height: '2em', alignText: 'center'}}>
          <b style={{float: 'left'}}>{this.props.start}-{this.props.end} of {this.props.nReviews} Reviews</b>
          <button style={{float: 'right'}} onClick={this.toggleOptional}>{'show filters'}</button>
          <form style={{float: 'right'}}>
            <select value={this.state.sorting} onChange={this.handleSorting}>
              <option value='Viewed'>Most Viewed</option>
              <option value='Relevant'>Most Relevant</option>
              <option value='Helpful'>Most Helpful</option>
              <option value='Recent'>Most Recent</option>
              <option value='Highest'>Highest to Lowest Rating</option>
              <option value='Lowest'>Lowest to Highest Rating</option>
            </select>
          </form>
          <b style={{float: 'right'}}>Sort by (not implemented):</b>
        </div>
        <Optional visible={this.state.optional} />
      </div>
    );
  }
}

export default ReviewListHeader;
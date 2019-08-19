import React, { Component } from 'react';

class Date extends Component {
  render() {
    return (
      <input type="date" min={this.props.minDate} max={this.props.maxDate} value={this.props.value} onChange={this.props.onChange}/>
    );
  }
}
 
export default Date;

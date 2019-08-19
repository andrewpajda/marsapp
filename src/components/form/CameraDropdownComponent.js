import React, { Component } from 'react';

class CameraDropdown extends Component {
  state = {

  }
  render() { 
    return (
      <select onChange={this.props.onChange}>
        {this.props.options.map((option) => <option key={option}>{option}</option>)}
      </select>
    );
  }
}
 
export default CameraDropdown;
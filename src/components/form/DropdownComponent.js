import React, { Component } from 'react';

class Dropdown extends Component {
  render() { 
    return (
      <select onChange={this.props.onChange}>
        {this.props.options.map((option) => <option key={option.name} value={option.abbr}>{option.name}</option>)}
      </select>
    );
  }
}
 
export default Dropdown;

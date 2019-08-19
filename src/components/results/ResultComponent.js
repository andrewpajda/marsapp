import React, { Component } from 'react';
class Result extends Component {
  render() { 
    return (
      <div>
        <img src={this.props.result.img_src} alt='picture taken by martian rover'/>>
        <h4>Photo ID: {this.props.result.id}</h4>
        <p>Taken with {this.props.result.camera.full_name}</p>
        <p>Taken on {this.props.result.earth_date}, {this.props.result.sol} martian Sol</p>
        <a href={this.props.result.img_src} target='blank'>View full image</a>
      </div>
    );
  }
}
 
export default Result

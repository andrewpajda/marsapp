import React, { Component } from 'react';
class Result extends Component {
  render() { 
    return (
      <div className='result'>
        <div className="result-thumbnail">
          <img className ="result-thumbnail-image" src={this.props.result.img_src} alt='taken by martian rover'/>
        </div>
        <div className="result-description">
          <h4>Photo ID: {this.props.result.id}</h4>
          <p>Taken with {this.props.result.camera.full_name}</p>
          <p>Taken on {this.props.result.earth_date}, {this.props.result.sol} martian Sol</p>
        </div>
        <div className="result-view">
          <button className='result-view-button'><a className='result-view-button-link' href={this.props.result.img_src} target='blank'>View full image</a></button>
        </div>
      </div>
    );
  }
}
 
export default Result
